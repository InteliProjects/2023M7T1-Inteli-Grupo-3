# Definição da Aplicação

## 1) Conteiner Docker

Nesta seção, definimos a configuração dos containers Docker que compõem a aplicação. Cada serviço é encapsulado em um container para garantir isolamento, reprodutibilidade e escalabilidade.

### Serviços:

| Serviço    | Imagem/Base             | Portas     | Dependência   | Redes  |
|------------|-------------------------|------------|---------------|--------|
| rabbitmq   | rabbitmq:management     | 5672, 15672| -             | default|
| web        | ./frontend/ton-store    | 3000       | -             | -      |
| auth       | ./backend/services/auth | 3001       | -             | default|
| order      | ./backend/services/order| 3002       | rabbitmq      | default|
| payment    | ./backend/services/payment | 3003    | rabbitmq      | default|
| product    | ./backend/services/product | 3004    | -             | default|

### Detalhes Adicionais:

- Serviço **rabbitmq**:
  - Variáveis de ambiente: 
    - RABBITMQ_DEFAULT_USER: guest
    - RABBITMQ_DEFAULT_PASS: guest
  - Volumes:
    - `./backend/services/queue/init/rabbitmq.conf` → `/etc/rabbitmq/rabbitmq.conf`
    - `./backend/services/queue/init/definitions.json` → `/etc/rabbitmq/definitions.json`

### Redes:

| Nome      | Driver   |
|-----------|----------|
| default   | bridge   |

## 2) Filas

RabbitMQ é o serviço de mensageria usado no projeto. Ele garante a entrega e o processamento adequado de mensagens entre diferentes partes da aplicação. A seguir, estão os detalhes de configuração das filas, exchanges, bindings, entre outros.

### Detalhes:

- **Queues**:

| Nome              | Tipo     | Durable | Auto Delete |
|-------------------|----------|---------|-------------|
| orders_to_process | classic  | true    | false       |

- **Exchanges**:

| Nome            | Tipo   | Durable | Auto Delete | Internal |
|-----------------|--------|---------|-------------|----------|
| order_exchange  | direct | true    | false       | false    |

- **Bindings**:

| Origem          | Destino           | Tipo Destino | Routing Key      |
|-----------------|-------------------|--------------|------------------|
| order_exchange  | orders_to_process | queue        | order_routing_key|

- **Usuários**:

| Nome   | Tags          |
|--------|---------------|
| guest  | administrator |

- **Vhosts**:

| Nome |
|------|
| /    |

### Configuração do RabbitMQ:

A configuração do RabbitMQ é definida no arquivo `rabbitmq.conf`. A chave de configuração mais importante é:

```
management.load_definitions = /etc/rabbitmq/definitions.json
```
## 3) Kubernetes e Helm

O Kubernetes é uma poderosa plataforma de código aberto para orquestração de contêineres Docker, permitindo a automação da implantação, dimensionamento e gerenciamento de aplicativos em ambientes de nuvem ou locais.

Para otimizar nossa implantação no Kubernetes, utilizamos o Helm como nosso gerenciador de pacotes. Os arquivos de configuração seguem o padrão exemplificado abaixo:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minha-aplicacao
spec:
  replicas: 3
  selector:
    matchLabels:
      app: minha-aplicacao
  template:
    metadata:
      labels:
        app: minha-aplicacao
    spec:
      containers:
      - name: meu-container
        image: minha-imagem:tag
        ports:
        - containerPort: porta-microsserviço
```

Nosso cluster Kubernetes é baseado no Amazon EKS, e os arquivos de implantação estão localizados em `./backend/k8s`. 

### Ambiente AWS

Como pode ser visto no [vídeo demonstrativo da arquitetura AWS](https://youtu.be/Uk7Y4kW-Xec), é necessário um ambiente robusto para que a implantação da aplicação seja feita. Recomendamos um cluster EKS com 3 a 5 nós em instâncias t3.medium, caso queira executar a aplicação da melhor maneira possível. Os passos para implantar esse ambiente podem ser seguidos de acordo com a documentação oficial da Amazon. Abaixo estão algumas referências extremamente úteis:

- Cluster EKS: [Link para documentação](https://docs.aws.amazon.com/pt_br/eks/latest/userguide/create-cluster.html)
- Kubectl: O kubectl é uma ferramenta flexível e poderosa que desempenha um papel fundamental no gerenciamento de clusters Kubernetes e aplicativos em contêineres. [Documentação Oficial](https://kubernetes.io/pt-br/docs/tasks/tools/).

*Obs.:* Caso seja necessário, lembre de atualizar seu arquivo `kubeconfig`. Utilize o comando abaixo para atualizar seu ambiente local de acordo com seu ambiente AWS.  Caso seja necessário, utilize as documentações explicitadas em _Referências_ para a configuração do AWS CLI. 

```shell
aws eks update-kubeconfig --region region-code --name my-cluster
```
_Referências_: 
- AWS CLI: [Documentação de Setup](https://docs.aws.amazon.com/pt_br/streams/latest/dev/setup-awscli.html)
- Arquivo kubeconfig: [Documentação Oficial](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)

### Implantação da Aplicação

Para implantar a aplicação, utilize o seguinte comando no diretório `./backend/k8s/backend`:

Apesar de estarmos utilizando a modelagem padrão do Helm Charts, recomendamos que a implantação dos pods seja feita de forma manual, mitigando assim possíveis riscos de problemas. 

Utilizamos o RabbitMQ como serviço de fila, como mencionado anteriormente, portanto é extremamente importante iniciarmos esse pod primeiro. Dentro da pasta `queue`, execute o seguinte comando: 

```shell
kubectl apply -f ./deployment.yaml
kubectl expose deployment rabbitmq
```

Os dois comandos acima são responsáveis pelo deploy do pod e pela exposição das portas necessárias para os outros microsserviços. 

Acompanhe o progresso da implantação executando:

```shell
kubectl get pods 
```
ou o comando abaixo:
```shell 
kubectl get all 
```

Após certificar-se de que o microsserviço de fila está funcionando corretamente, entre nos demais diretórios dentro da pasta `templates` e execute o comando:

```shell
kubectl apply -f ./deployment.yaml
```

Após a execução de todos os deploys, seus pods estarão provisionados dentro do seu cluster EKS, e podem ser vistos dentro da aba `Resources` em seu cluster na Amazon. Caso seu EKS não seja público, [conecte-o a um Application Load Balancer](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html) para obter o maior proveito de suas instâncias EC2. 
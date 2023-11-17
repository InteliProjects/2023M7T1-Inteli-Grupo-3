# Arquiteura AWS Ton Store - Sprint 4

![Arquitetura AWS Sprint 4](./img/arc_sprint_4.jpeg)

## 1° Nível: Região (US - Virgínia do Norte)

Os primeiros serviços que serão apresentados são aqueles se encontram no nível de "Região" da AWS, começando com os que possuem interação direta com o usuário/cliente:

### CloudFront

O CloudFront distribui os conteúdos front-end da página do serviço web ao usuário de maneira rápida. Sua forma de distribuição se baseia em Pontos de Presença, onde caso o conteúdo já esteja em um ponto próximo do usuário, o serviço entrega ao usuário o mais rápido possível. Caso o ponto não possua o conteúdo, o serviço busca-o no S3. A distribuição da página em Pontos de Presença reduz tráfego pois é cortado a quantidade de transações realizadas pela internet para chegar até o conteúdo.

### S3

No Simple Storage Service (S3) se é armazenado a página front-end do projeto. Não há interação direta do usuário com este serviço. Os benefícios do uso do S3 para o projeto incluem a capacidade de escalabilidade para replicação de objetos na mesma região para redução de latência e alta escalabilidade para aumento e redução de recursos conforme o necessário.

## 2° Nível: VPC

O Virtual Private Cloud (VPC) é uma aplicação que cria uma nuvem privada para execução de tarefas em uma área segura, aqui são armazenados os servidores e banco de dados que são separados por Subnets públicas e privadas.

Esta arquitetura garante que mesmo somente duas Zonas de Disponibilidade são capazes de entregar um serviço confiável tolerante a falhas.

### Application Load Balancer

O ALB é um serviço de balanceamento de carga gerenciado pela AWS que direciona o tráfego de aplicativos da web para instâncias EC2 ou pods do Amazon Elastic Kubernetes Service (EKS) com base em regras de roteamento configuradas. Ele otimiza a distribuição de carga, gerencia a terminação SSL/TLS, suporta escalabilidade automática e mantém informações de sessão do cliente, garantindo a alta disponibilidade, escalabilidade e confiabilidade dos aplicativos web e Kubernetes hospedados na AWS. O ALB desempenha um papel fundamental na orquestração do tráfego e na entrega de solicitações para os recursos apropriados, facilitando o gerenciamento de aplicativos complexos na nuvem.

## Zona de Disponibilidade 1

Esta Zona seria restrita em maior parte para o time de desenvolvimento. Possuindo o centro de acesso dos devs as EC2s na Subnet Pública, o Bastion, e na Subnet Privada um banco de dados RDS em caso de failover em outras regiões.

### (Subrede Pública)

### Internet Gateway

No Internet Gateway há a configuração do acesso entre servidor e internet. Esse serviço é usado como um caminho para que as aplicações de testes possam realizar as devidas validações no sistema como um todo.

### (Subrede Privada)

### Elastic Kubernetes Service

O EKS é um serviço gerenciado que simplifica a criação, o gerenciamento e a escalabilidade de clusters Kubernetes na AWS. Ele oferece alta disponibilidade, integração com serviços da AWS, atualizações automáticas, segurança avançada e suporte a contêineres, permitindo que os desenvolvedores se concentrem no desenvolvimento de aplicativos em contêineres, enquanto a AWS cuida da infraestrutura e da operação do cluster. O EKS está sendo usado para realizar o deploy dos diversos contêineres da aplicação, cada um contendo um microsserviço.

### Banco de Dados RDS (Principal)

Na Subnet Privada da atual zona reside o Relational Database Service (RDS) PostgreSQL que alimenta as instâncias EKS da zona em questão. Em caso do aumento repentino ou previsto de acessos aquele banco de dados, o RDS possuí mecanismos de rápida escalabilidade, como a criação de mais instâncias ou aumento do tamanho da RDS existente para adequar-se a inúmeras requisições.

## Zona de Disponibilidade (2...N)

Aqui se encontra o lugar onde os servidores serão instanciados para a execução das aplicações web e acesso do banco de dados. O motivo do "N" no título seria que mais zonas podem ser alcançadas caso seja necessário escalar o projeto para arquiteturas maiores.

### Elastic Kubernetes Service

A abrangência do EKS se estende a mais de uma única zona de disponibilidade AWS, com o objetivo de conferir ao sistema uma alta disponibilidade e uma maior tolerância a falhas. Isso se dá por meio da possibilidade das instâncias EKS escalarem horizontalmente.

### Banco de Dados RDS (Failover)

Estas instâncias de banco de dados não estão ligados diretamente a nenhuma instância EKS. Sua função, como explicitado pelo nome, seria um banco de dados extra em caso de falhas em qualquer outra Zona de Disponibilidade. 

## Pipeline CI / CD (integração contínua / entrega contínua)

### CodeCommit

O AWS CodeCommit é um serviço de hospedagem de repositórios Git privados que desempenha um papel central em arquiteturas AWS, permitindo o armazenamento seguro e o gerenciamento eficiente de código-fonte. Ele suporta integração com serviços de automação, oferece recursos avançados de segurança e controle de acesso e promove colaboração entre equipes. O Code Commit do grupo está linkado com o repositório GitHub.

### CodeBuild

O AWS CodeBuild é um serviço essencial em uma pipeline CI / CD, automatizando a compilação, teste e empacotamento de código, garantindo a qualidade do software e facilitando a implantação eficiente de aplicativos na nuvem da AWS. O CodeBuild puxa os códigos-fonte salvos no CodeCommit para realizar tais ações de forma automatizada.

### Elastic Container Registry

O AWS ECR fornece um local seguro para armazenar imagens de contêineres Docker. Com integração nativa aos serviços AWS, ele facilita a implantação de aplicativos em contêineres, garante a segurança e escalabilidade das imagens e promove a conformidade e auditoria em ambientes de desenvolvimento e produção na nuvem AWS. O ECR armazena os containers cujo código-fonte está salvo no CodeCommit e foi compilado pelo CodeBuild.



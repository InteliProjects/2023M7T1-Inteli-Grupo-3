# Arquitetura Corporativa

Neste documento é apresentado a Arquitetura Corporativa do projeto e sua implementação na AWS, assim como a funcionalidade de cada serviço e quais requisitos/metas são alcançados.

![Arquitetura Corporativa na AWS](img/arquitetura_corporativa.jpg)

Vídeo demonstrando a Arquitetura Corporativa, utilizando AutoScaling Group e Load Balancer: [Assista ao vídeo](https://youtu.be/dduQcURm91E)
  
## 1° Nível: Região (US - Virgínia do Norte)

Os primeiros serviços que serão apresentados são aqueles se encontram no nível de "Região" da AWS, começando com os que possuem interação direta com o usuário/cliente:

### Route 53

O Route 53 é o primeiro serviço requisitado pelo usuário. Ele retorna o endereço de IPv4 quando se acessa o site do projeto hospedado na nuvem. Sua funcionalidade aparenta simples, porém pode-se configurar qual endpoint será distribuído baseado na sua saúde (que pode ser configurável) e redirecionar usuários para outros endpoints em caso de falhas, garantindo confiabilidade.

### ELB

O Elastic Load Balancer (ELB) é uma EC2 especial que balanceia tráfego de acessos em diferentes EC2 da arquitetura corporativa. Este aplicativo garante a distribuição correta de acessos na aplicação para EC2 consideráveis saudáveis (que pode ser configurado), providenciando tolerância a falhas e entrega de serviço funcional ao usuário.

### CloudFront

O CloudFront distribui os conteúdos front-end da página do serviço web ao usuário de maneira rápida. Sua forma de distribuição se baseia em Pontos de Presença, onde caso o conteúdo já esteja em um ponto próximo do usuário, o serviço entrega ao usuário o mais rápido possível. Caso o ponto não possua o conteúdo, o serviço busca-o no S3. A distribuição da página em Pontos de Presença reduz tráfego pois é cortado a quantidade de transações realizadas pela internet para chegar até o conteúdo.

### S3

No Simple Storage Service (S3) se é armazenado a página front-end do projeto. Não há interação direta do usuário com este serviço, porém quando um acesso é feito no serviço web, uma replica da página e o usuário são encaminhados para uma EC2 que mais se adequa aquele determinado tráfego. Os benefícios do uso do S3 para o projeto incluem a capacidade de escalabilidade para replicação de objetos na mesma região para redução de latência e alta escalabilidade para aumento e redução de recursos conforme o necessário.
## 2° Nível: VPC

O Virtual Private Cloud (VPC) é uma aplicação que cria uma nuvem privada para execução de tarefas em uma área segura, aqui são armazenados os servidores e banco de dados que são separados por Subnets públicas e privadas.

Esta arquitetura garante que mesmo somente duas Zonas de Disponibilidade são capazes de entregar um serviço confiável tolerante a falhas.

### Internet Gateway

No Internet Gateway há a configuração do acesso entre servidor e internet. Na configuração desta arquitetura há a somente a possibilidade de acesso interno ao exterior mas não o contrário, isto é, uma EC2 pode acessar a internet para realizar updates de software, mas usuários e websites não podem acessar diretamente os servidores sem antes passarem pela infraestrutura de acesso que possui seu início na Route 53.

## Zona de Disponibilidade 1

Esta Zona seria restrita em maior parte para o time de desenvolvimento. Possuindo o centro de acesso dos devs as EC2s na Subnet Pública, o Bastion, e na Subnet Privada um banco de dados RDS em caso de failover em outras regiões.

### Bastion

O Bastion é um EC2 de acesso exclusivo do time de desenvolvimento para controle e acesso universal de todos os EC2s da arquitetura. A partir do Bastion pode-se acessar a zona de desenvolvimento de todos os servidores web do projeto que não podem ser acessados senão somente por ele, reduzindo a necessidade interação constante com a interface web de EC2 da AWS e concentrando todas as medidas e esforços de segurança em uma única máquina, aumentando a proteção do ambiente. 

### Banco de Dados RDS (Failover)

Este banco de dados poussi uma caraterística única: não está diretamente conectado a uma EC2. Sua função, como explicitado pelo nome, seria um banco de dados extra em caso de falhas em qualquer outra Zona de Disponibilidade. Ele se encontra junto com o Bastion pois o próprio Bastion não precisa de um banco de dados, então ao invés de instanciar uma Subnet Privada em outra Zona de Disponibilidade, pode-se utilizar a subnet vazia desta zona, economizando complexidade e recursos.
## Zona de Disponibilidade (2...N)

Aqui se encontra o lugar onde os servidores serão instanciados para a execução das aplicações web e acesso do banco de dados. O motivo do "N" no título seria que mais zonas podem ser alcançadas caso seja necessário escalar o projeto para arquiteturas maiores.

### Servidor EC2

O servidor no Elastic Compute Cloud (EC2) é fundamental para o funcionamento do projeto, pois é aqui que se hospeda os acessos dos usuários que visitam a plataforma. O EC2 de uma determinada zona se encontra numa Subnet Pública e possui acesso direto ao Banco de Dados RDS que se encontra na Subnet Privada da mesma zona.

### Banco de Dados RDS (Principal)

Na Subnet Privada da atual zona reside o Relational Database Service (RDS) PostgreSQL que alimenta a EC2 daquela zona, e o acesso é garantido somente aquela EC2. Em caso do aumento repentino ou previsto de acessos aquele banco de dados, o RDS possuí mecanismos de rápida escalabilidade, como a criação de mais instâncias ou aumento do tamanho da RDS existente para adequar-se a inúmeras requisições.

### Auto Scaling Group

Este mecanismo engloba todas as EC2, mesmo se estão em zonas diferentes. Com este serviço, pode-se agregar a lógica de escalabilidade para diversas EC2 e monitora-las sem a necessidade de escalar uma por vez, pois estão todas agrupadas em somente um campo lógico.

## Conclusão

Está arquitetura possui como principal foco a escalabilidade e tolerância a falhas que são cruciáis em cenários de sobrecarga e acesso frequente de usuários.

Sistemas que proporciam certo nível de segurança também estão implementados porém, caso seja desejável ao escopo do projeto, sistemas mais complexos de segurança como Níveis de Segurança podem ser adicionados futuramente.

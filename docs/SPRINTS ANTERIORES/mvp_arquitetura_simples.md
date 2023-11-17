# MVP com Implantação da Aplicação em uma Arquitetura Simples

Este documento corresponde ao que foi solicitado no cartão "MVP com Implantação da Aplicação em Arquitetura Básica" na Sprint 2.

## Arquitetura da Solução

Desde a última sprint, nossa arquitetura evoluiu significativamente! Continuamos utilizando as mesmas tecnologias: o frontend foi construído com [Next.js](https://nextjs.org/), enquanto o backend foi desenvolvido em [Node.js](https://nodejs.org/) com [NestJS](https://nestjs.com/).

Para o banco de dados, estamos utilizando o [Amazon RDS](https://aws.amazon.com/rds/) com [PostgreSQL](https://www.postgresql.org/) por meio da biblioteca [Prisma](https://www.prisma.io/) para lidar com as requisições.

**Fluxograma Inicial:**
![Fluxograma Inicial](../docs/img/fluxograma_inicial.jpeg)

No entanto, evoluímos além do fluxograma inicial da aplicação. Trabalhamos para alcançar a melhor solução possível e chegamos a este fluxograma:

**Fluxograma Atual:**
![Fluxograma Atual](../docs/arquitetura-aws-sprint3.jpeg)

Para a implantação do frontend, estamos utilizando o [CloudFront](https://aws.amazon.com/pt/cloudfront/) e o [S3](https://aws.amazon.com/s3/), este último para armazenamento de imagens. Ambos estão em execução em uma instância EC2. Quanto ao backend, estamos usando um [Bastion Host](https://aws.amazon.com/pt/solutions/implementations/linux-bastion/) e outro servidor [EC2](https://aws.amazon.com/pt/ec2/) em duas zonas de disponibilidade, todos distribuídos por um [ELB (Elastic Load Balancer)](https://aws.amazon.com/pt/elasticloadbalancing/).

Nosso banco de dados, o [Amazon RDS](https://aws.amazon.com/rds/), está em uma subnet privada, acessível somente pelas instâncias EC2 dentro da [VPC](https://aws.amazon.com/vpc/), devidamente autorizadas.

## Documentação das Rotas

Nesta segunda sprint, trabalhamos para tornar as rotas mais concisas, o que resultou na exclusão de algumas rotas da nossa base, como aquelas relacionadas a endereços e pagamentos. Atualmente, contamos com 24 rotas, e a coleção para a API REST do Backend no Postman pode ser acessada [clicando aqui](https://documenter.getpostman.com/view/20630085/2s9Xy5MW6b).

A fim de centralizar e unificar a documentação, removemos a exemplificação de algumas rotas deste documento e a transferimos para o Postman, onde a versão mais atualizada e consistente dos endpoints pode ser encontrada. Além disso, nossa aplicação agora emprega verificações baseadas em tokens de acesso, fazendo uso da tecnologia [JWT](https://docs.nestjs.com/security/authentication).

Para uma visão abrangente do projeto como um todo, recomendamos que você consulte a documentação completa e a coleção do [Backend no Postman](https://documenter.getpostman.com/view/20630085/2s9Xy5MW6b).

## Vídeos Demonstrativos

- Vídeo demonstrando a Arquitetura Corporativa, utilizando AutoScaling Group e Load Balancer: [Assista ao vídeo](https://youtu.be/dduQcURm91E)
  
- Vídeo demonstrativo do frontend da aplicação "Ton Store": [Assista ao vídeo](https://youtu.be/si8-Aoz2QWQ)

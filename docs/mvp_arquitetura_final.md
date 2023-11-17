# MVP com Implantação da Aplicação em uma Arquitetura na AWS

Este documento corresponde ao que foi entregue no final do módulo como arquitetura da solução.

## Arquitetura da Solução

Desde o começo do módulo, nossa arquitetura evoluiu significativamente! Continuamos utilizando as mesmas tecnologias: o frontend foi construído com [Next.js](https://nextjs.org/), enquanto o backend foi refatorado em microsserviços em [Node.js](https://nodejs.org/) com [NestJS](https://nestjs.com/).

Para toda a aplicação, utilizamos [Docker](https://www.docker.com/) como ferramenta para conteinerizar nossa aplicação. Toda a aplicação pode ser facilmente implantada localmente ou dentro de um serviço computacional como Amazon EC2 com os seguintes comandos, dentro da pasta `src`:

```shell
docker-compose up -d
```

Para o banco de dados, estamos utilizando o [Amazon RDS](https://aws.amazon.com/rds/) com [PostgreSQL](https://www.postgresql.org/) por meio da biblioteca [Prisma](https://www.prisma.io/) para lidar com as requisições.

**Fluxograma Inicial:**
![Fluxograma Inicial](../docs/img/fluxograma_inicial.jpeg)

No entanto, evoluímos além do fluxograma inicial da aplicação. Trabalhamos para alcançar a melhor solução possível e chegamos a este fluxograma final, implementando microsserviços e autoescalabilidade:

**Fluxograma Atual:**
![Fluxograma Atual](../docs/img/arc_sprint_4.jpeg)

Para a implantação do frontend, estamos utilizando o [CloudFront](https://aws.amazon.com/pt/cloudfront/) e o [S3](https://aws.amazon.com/s3/), este último para armazenamento de imagens. Ambos estão em execução em uma instância EC2.

Quanto ao backend, utilizamos um Application Load Balancer para distribuir as requisições entre os diferentes nós [EC2](https://aws.amazon.com/pt/ec2/) que executam nossos pods no [EKS](https://aws.amazon.com/pt/eks/). Caso tenha dúvidas na implantação dos microsserviços, consulte a documentação [clicando aqui](./definição_da_aplicação.md).

Nosso banco de dados, o [Amazon RDS](https://aws.amazon.com/rds/), está em uma subnet privada, acessível somente pelas instâncias EC2 dentro da [VPC](https://aws.amazon.com/vpc/), devidamente autorizadas.

A descrição completa da arquitetura e todo o fluxograma atual pode ser encontrada em [arquitetura_sprint5.md](./arquitetura_sprint5.md).

## Documentação das Rotas

Na conclusão do projeto, a divisão da arquitetura monolítica em microsserviços fez com que reduzíssemos a necessidade de endpoints. Há uma documentação enxuta dos endpoints e a leitura dela é fortemente recomendada antes da implementação da aplicação. [Acesse a documentação no Postman](https://documenter.getpostman.com/view/30296674/2s9YJez232)

A fim de promover uma maior segurança, nossa aplicação emprega verificações baseadas em tokens de acesso, fazendo uso da tecnologia [JWT](https://docs.nestjs.com/security/authentication).

Para uma visão abrangente do projeto como um todo, recomendamos que você consulte a documentação completa e a coleção do [Backend no Postman](https://documenter.getpostman.com/view/30296674/2s9YJez232).

## Vídeos Demonstrativos

Unificamos dentro de um só vídeo a demonstração do Backend e Frontend dentro da AWS. O vídeo completo mostrando toda a arquitetura implementada pode ser visto a partir do link abaixo: [Assista ao vídeo](https://youtu.be/Uk7Y4kW-Xec)

Caso queira ver o frontend em detalhes, acesse o vídeo da Sprint 3, referente ao Frontend: [Assista ao vídeo](https://youtu.be/si8-Aoz2QWQ)

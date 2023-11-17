# Análise de Gestão de Custo

## Introdução

Com o projeto sendo executado na AWS, mergulhamos em uma análise financeira que revela a notável adaptabilidade e elasticidade dessa líder plataforma em nuvem. A Amazon Web Services revolucionou a abordagem das empresas à infraestrutura tecnológica, viabilizando a alocação flexível de recursos conforme a demanda varia. Neste contexto, exploraremos em detalhes como essa elasticidade influenciará os custos operacionais em um cenário de recursos sob demanda.

## Custo da Infraestrutura

A infraestrutura destinada a fornecer a solução é dinâmica e, dada sua escalabilidade, pode apresentar custos variáveis conforme a necessidade de processamento. No entanto, vamos aproveitar as ferramentas de precificação fornecidas pela própria Amazon. Por meio do [AWS Pricing Calculator](https://calculator.aws/), adotaremos as configurações a seguir: (Nota: O fluxograma completo da aplicação pode ser encontrado nos arquivos "arquitetura_sprint3" e "arquitetura_sprint4").

Utilizamos 3 instâncias EC2 com AMI (Amazon Machine Image) Linux Ubuntu de tipo compartilhado com seu tipo de instância sendo **t3.medium**. Enquanto essas são nossas configurações de partida, há a possibilidade de escalar até 8 instâncias da mesma categoria. O investimento para 3 instâncias é de \$ 95.90 por mês, mas ao expandir para 8, o valor sobe para \$ 255.74 mensais.

Além dos custos relacionados ao processamento através das instâncias EC2 alugadas, também incorreremos nos seguintes gastos:

- Banco de dados RDS com PostgreSQL - \$ 494.91 mensais.
- VPC Básica com 4 subnets configuradas - \$ 0.00 USD mensais. (Não usamos mais NAT Gateway)
- Elastic Load Balancer, configurado para suportar 35 mil requisições por segundo (Caso extremo indicado pela Stone) - \$ 22,533.00 mensais.
- Pipeline CI/CD - em torno de \$ 4.00 por mês incluindo CodeBuild e Code Pipeline.
- ECR para guardar nossas imagens custará \$ 2.00 por mês.
- Utilizando o EKS com um Cluster custará \$ 73.00 por mês.
- Um CloudFront em torno de \$ 6.00 por mês.

O total anual para essa escala máxima seria em torno de **\$ 280,423.80**.

## Custo de Mão de Obra

Trazendo agora para dentro do contexto do grupo, podemos também adicionar a esta análise a prospecção do investimento necessário para que esse projeto fosse realizado. Para isto, utilizaremos uma equipe onde irá trabalhar em um período de dez semanas, sete desenvolvedores júnior, um especialista em arquitetura e AWS e um scrum master.

A média salarial que pode ser encontrada para desenvolvedores júnior no Brasil, [segundo Glassdoor](https://www.glassdoor.com.br/Sal%C3%A1rios/sao-paulo-desenvolvedor-junior-sal%C3%A1rio-SRCH_IL.0,9_IC2479061_KO10,30.htm#:~:text=Sal%C3%A1rios%20do%20cargo%20de%20Desenvolvedor%20J%C3%BAnior%20%E2%80%93%20S%C3%A3o%20Paulo%2C%20SP&text=Como%20a%20m%C3%A9dia%20salarial%20de,aproxima%20da%20realidade%20para%20voc%C3%AA%3F),  especificamente em São Paulo, é de R\$ 8,050 (Último acesso em 05/10/2023). Totalizando R$ 56,350.

O Arquiteto de Soluções auxiliará na criação do projeto e é essencial para consolidar o projeto. Sua média salarial [pode ser encontrada](https://www.glassdoor.com.br/Sal%C3%A1rios/s%C3%A3o-paulo-arquiteto-de-solu%C3%A7%C3%B5es-sal%C3%A1rio-SRCH_IL.0,9_IM1009_KO10,31.htm#:~:text=A%20m%C3%A9dia%20salarial%20de%20Arquiteto,%24%207.150%20e%20R%24%2033.716.) por R\$ 17,500.

Sob o contexto de desenvolvimento de software, é de extrema importância a presença de metodologias ágeis. O Scrum Master atua de forma precisa administrando o dashboard e facilitando a implementação do framework, tendo como [faixa salarial](https://www.glassdoor.com.br/Sal%C3%A1rios/sao-paulo-scrum-master-sal%C3%A1rio-SRCH_IL.0,9_IC2479061_KO10,22.htm#:~:text=Sal%C3%A1rios%20do%20cargo%20de%20Scrum%20Master%20%E2%80%93%20S%C3%A3o%20Paulo%2C%20SP&text=Como%20a%20m%C3%A9dia%20salarial%20de,aproxima%20da%20realidade%20para%20voc%C3%AA%3F) R\$ 8,200.

O investimento total em uma equipe durante 10 semanas (cerca de dois meses e uma semana) é de **R\$ 184,612.50**.

Ao todo, foram gastos **R\$ 1,634,403.54** (cotação do dólar em 05/10/2023), sendo R\$ 1,449,791.04 em infraestrutura anual AWS e R\$ 184,612.50 com a equipe.

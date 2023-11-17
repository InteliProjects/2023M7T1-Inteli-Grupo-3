# Entendimento do Negócio


## Matriz de avaliação de valor Oceano Azul
A partir da Matriz Oceano Azul podemos identificar como nosso produto pode se tornar competitivo no mercado. Através do modelo de 4 ações (ELIMINAR, REDUZIR, ELEVAR e CRIAR), estabelecemos 8 atributos para conferir destaque ao nosso projeto.

Para a construção dessa matriz, utilizamos a solução atual e dois grandes competidores no mercado de softwares: PagSeguro e Cielo. 
### Análise Estratégica - Matriz TonStore

#### Reduzir
O intuito é reduzir fatores que a indústria considera essenciais, mas que podem ser reduzidos para oferecer um produto ou serviço de qualidade com um preço mais acessível.

Fatores a serem reduzidos:
- **Taxas**: Por se tratar de uma plataforma contendo os produtos da Stone e da Ton, as taxas acabam sendo muito mais baixas do que o mercado, uma vez que a Stone é pioneira nessa redução.

- **Gargalos de Infraestrutura Tecnológica**: Muitos dos softwares concorrentes apresentam erros ou mesmo não contam com uma estrutura que comporte a alta intensidade de tráfego no site. Com a infraestrutura de testes e a plataforma escalável, isso deixa de ser um problema para nosso usuário.

#### Elevar
A ação de elevar trata-se de valorizar fatores que os clientes necessitam, mas que a indústria não oferece ou oferece de forma básica.

- **Experiência do Usuário**: A maioria dos sites de adesão ao produto apresenta uma interface nada minimalista. Apresentam uma poluição visual ao inserir excessivamente informações sobre o produto de maneira que não agrega valor ao serviço. Ao contrário, muitas vezes inviabilizam a compra ao não trazer conforto e confiança ao cliente.

- **Ecossistema Integrado**: Aumentar a integração com plataformas de e-commerce e marketplaces, simplificando as vendas online para lojistas. Como um sistema de gestão empresarial, fornecendo uma solução completa para os lojistas gerenciarem suas operações, gerando diversos insights de produção.

#### Eliminar
Esta estratégia refere-se a remover todos os fatores que são dispensáveis para os clientes e não são necessários para agregar valor ao produto.

- **Barreiras de Adesão**: Eliminar barreiras à adesão, como contratos de longo prazo ou requisitos rigorosos, permite que o cliente se sinta mais confortável em aderir ao produto. Aliado a um produto/serviço de excelência, isso aumenta nossa prospecção de clientes.

- **Exigências Contratuais**: Eliminando exigências de contrato de longo prazo, por exemplo, a Stone pode optar por não impor contratos de longo prazo aos lojistas, permitindo que eles experimentem os serviços sem o compromisso de longo prazo.

#### Criar
A estratégia "Criar" refere-se a criar novos fatores que atualmente não são oferecidos pela indústria ou pelos concorrentes. Isso permite inovar e trazer uma solução diferente para nossos clientes.

- **Novos Canais de Distribuição**: A Stone utiliza canais de distribuição inovadores, como parcerias com varejistas e marketing boca a boca, para alcançar os lojistas. A plataforma também é acessível e online. Juntamente com campanhas de divulgação em massa, como no caso do Big Brother Brasil, a Stone pode utilizar toda a plataforma e ecossistema da TonStore como um aliado à divulgação poderosa.

- **Programas de Educação e Preparo**: Visando o público-alvo de microempreendedores da TonStore (mesmo que a plataforma permita produtos do Ecossistema Stone como um todo), é interessante que seja criado conteúdo educativo sobre o produto e sobre vendas e negócios. Isso permite que o empreendedor cresça suas vendas graças a esse serviço, aumentando a divulgação e visão de qualidade entre os consumidores.

## Gráfico de Percepção do Usuário
A seguir, apresentamos um gráfico em relação à visão do usuário. Nota-se que, mesmo reduzindo as taxas, temos uma nota 10 para ele, já que a percepção do usuário sobre uma taxa menor é melhor do que altas taxas.

![Imagem - Matriz Oceano Azul](../docs/img/TonStore%20-%20Matriz%20de%20avaliação%20de%20valor%20Oceano%20Azul.png)

## Matriz de Riscos
A seguir, apresentamos a Matriz de Riscos elaborada pelo grupo. Nela, é possível visualizar tanto os potenciais riscos quanto as oportunidades associadas ao progresso do projeto. 

![imagem - Matriz de Riscos](../docs/img/Matriz%20de%20riscos.png)

## Value Proposition Canvas
Abaixo, disponibilizamos o nosso Value Proposition Canvas. Fundamentado na análise da nossa persona e nas necessidades identificadas no cotidiano, conseguimos mapear de que maneira planejamos proporcionar os benefícios desejados por ela, bem como os serviços que empregaremos para atingir esse propósito.

![imagem - Value Proposition Canvas](../docs/img/Value%20Proposition%20Canvas.png)

# Análise Financeira - Projeto na AWS

Com o projeto sendo executado na AWS, mergulhamos em uma análise financeira que revela a notável adaptabilidade e elasticidade dessa líder plataforma em nuvem. A Amazon Web Services revolucionou a abordagem das empresas à infraestrutura tecnológica, viabilizando a alocação flexível de recursos conforme a demanda varia. Neste contexto, exploraremos em detalhes como essa elasticidade influenciará os custos operacionais em um cenário de recursos sob demanda.

A infraestrutura utilizada para prover a solução não é estática e, por ser escalável, pode ter custos maiores de acordo com a demanda de processamento. Contudo, iremos utilizar as ferramentas de cálculo que a própria Amazon nos disponibiliza. Utilizando o [AWS Pricing Calculator](https://calculator.aws/#/), iremos usar as seguintes configurações: _(Obs.: O fluxograma geral da aplicação está contido em [Arquitetura](../docs/mvp_arquitetura_simples.md))_

- 2 máquinas EC2 de configuração com Linux e instância compartilhada; É necessário ressaltar que utilizamos a família t4g nano da AWS e que seria necessário uma análise mais profunda sobre as necessidades do produto para otimizar essa máquina. - Total de 9.78 USD por mês.

- Banco de dados RDS com PostgreSQL - 494.91 USD mensais.

- VPC Básica com 3 subnets configuradas - 625.98 USD mensais.

- Elastic Load Balancer, configurado para suportar 35 mil requisições por segundo (Caso extremo indicado pela Stone) - 22,533 USD mensais.

O total **anual** para essa escala máxima seria em torno de 283,971.72 USD.

Trazendo agora para dentro do contexto do grupo, podemos também adicionar a esta análise a prospecção do investimento necessário para que esse projeto fosse realizado. Para isto, utilizaremos uma equipe onde irá trabalhar em um período de dez semanas, sete desenvolvedores júnior, um especialista em arquitetura e AWS e um scrum master.

- A média salarial que pode ser encontrada para desenvolvedores júnior no Brasil, [especificamente em São Paulo, é de R$ 8,050](https://www.glassdoor.com.br/Sal%C3%A1rios/s%C3%A3o-paulo-desenvolvedor-j%C3%BAnior-sal%C3%A1rio-SRCH_IL.0,9_IM1009_KO10,30.htm?clickSource=searchBtn). Totalizando R$ 56,350.

- O Arquiteto de Soluções auxiliará na criação do projeto e é essencial para consolidar o projeto. Sua média salarial pode ser [encontrada por R$ 17,500](https://www.glassdoor.com.br/Sal%C3%A1rios/s%C3%A3o-paulo-arquiteto-de-solu%C3%A7%C3%B5es-sal%C3%A1rio-SRCH_IL.0,9_IM1009_KO10,31.htm?clickSource=searchBtn).

- Sob o contexto de desenvolvimento de software, é de extrema importância a presença de metodologias ágeis. O Scrum Master atua de forma precisa administrando o dashboard e facilitando a implementação do framework, [tendo como faixa salarial R$ 8,200](https://www.glassdoor.com.br/Sal%C3%A1rios/s%C3%A3o-paulo-scrum-master-sal%C3%A1rio-SRCH_IL.0,9_IM1009_KO10,22.htm?clickSource=searchBtn).

O investimento total em uma equipe durante 10 semanas (cerca de dois meses e uma semana) é de R$ 184,612.50.

Ao todo, foram gastos R$ 1,578,317.30 _(cotação do dólar em 12/08/2023)_, sendo R$ 1,393,704.80 em infraestrutura anual AWS e R$ 184,612.50 com a equipe.

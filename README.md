# Grupo-3
<table>
<td><a href= "https://www.inteli.edu.br/"><img src="./docs/img/logo-inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="70%"></a>
</td>
<td><a><img href="https://www.stone.com.br/" src="./docs/img/Logo-Stone.svg" alt="Stone pagamentos" border="0" width="50%"/></a></td>
</tr>
</table>

# Introdução

Este é o repositório dos arquivos dos alunos do Módulo 7 do curso de Ciência da Computação do Inteli no 3º trimestre de 2023. Durante este trimestre foi desenvolvido um projeto em parceria com a Stone.

# Projeto: Aplicação escalável em sistemas distribuídos

# Grupo: Ton Store

# Integrantes:

* [Elias Biondo](https://www.linkedin.com/in/eliasbiondo/)
* [Gabriel Carneiro](https://www.linkedin.com/in/gabecarneiro/)
* [Jonas Viana Sales](https://www.linkedin.com/in/jonas-viana-sales/s)
* [Mateus Soares de Almeida](https://www.linkedin.com/in/mateussda/)
* [Pedro Romão](https://www.linkedin.com/in/pedro-rom%C3%A3o-734b4920a/)
* [Sarah Ribeiro](https://www.linkedin.com/in/sarah-miranda-ribeiro/)
* [Sergio Lucas](https://www.linkedin.com/in/sergiobalucas/)

# Descrição

Este projeto aborda um desafio comum enfrentado por sites e aplicativos populares, especialmente durante os intervalos comerciais como do Big Brother Brasil (BBB). Durante esses momentos, muitas pessoas acessam o site e o aplicativo da nossa empresa, o que pode causar lentidão e até mesmo falhas no sistema. Nosso objetivo principal é garantir que o desempenho da aplicação seja consistente mesmo quando há um grande número de pessoas tentando usá-la ao mesmo tempo

Para resolver esse problema, estamos criando uma infraestrutura que pode se ajustar automaticamente ao aumento de tráfego. Estamos usando a tecnologia Kubernetes em um ambiente de nuvem (AWS) para garantir que a carga seja distribuída de forma eficiente entre os diferentes componentes do sistema.

Além disso, estamos criando um sistema de teste para simular esses momentos de alta demanda, usando a ferramenta "k6". Isso nos ajudará a garantir que a aplicação possa lidar com picos de tráfego sem problemas. 

# Documentação

Os arquivos da documentação deste projeto estão na pasta [docs/index.md](docs/index.md), e o seu conteúdo é publicado via GitHub Pages.

# Artigo

O artigo deste projeto está no diretório [artigo/artigo.md](artigo/artigo.md)

# Configurações para desenvolvimento 

Este documento descreve as configurações necessárias para o desenvolvimento de uma aplicação que utiliza as tecnologias NestJS para o backend, Next.js para o frontend, RabbitMQ como serviço de mensagens e Docker para o gerenciamento de contêineres. A aplicação é composta por diversas partes que trabalham em conjunto para fornecer uma solução de software completa.

## Tecnologias Utilizadas

### NestJS (Backend)
NestJS é um framework Node.js que fornece uma estrutura escalável para o desenvolvimento de aplicativos server-side. Ele utiliza TypeScript como linguagem principal e é conhecido por sua modularidade, facilidade de testes e suporte a várias bibliotecas. No contexto dessa aplicação, o NestJS é responsável por gerenciar a lógica de negócios e a comunicação com o RabbitMQ para processamento de filas.

### Next.js (Frontend)
Next.js é um framework de React que permite o desenvolvimento de aplicações web do lado do cliente e do servidor. Ele fornece recursos como renderização do lado do servidor (SSR) e geração de páginas estáticas, tornando as aplicações web mais rápidas e eficientes. O Next.js é responsável pela interface do usuário da aplicação e pela interação com o backend do NestJS.

### RabbitMQ (Fila)
RabbitMQ é um sistema de mensagens de código aberto que facilita a comunicação assíncrona entre componentes de uma aplicação distribuída. Ele é amplamente utilizado para processar tarefas em segundo plano, processamento em fila e comunicação entre microserviços. Nesta aplicação, o RabbitMQ é usado para enfileirar e processar tarefas de forma eficiente.

### Docker
Docker é uma plataforma de virtualização de contêineres que permite empacotar aplicativos e suas dependências em contêineres isolados. Isso facilita a implantação e execução de aplicativos em qualquer ambiente. Neste projeto, o Docker é usado para criar e gerenciar contêineres para o RabbitMQ e outros serviços auxiliares, simplificando o gerenciamento de dependências e ambientes de desenvolvimento.

Para executar a aplicação em seu ambiente de desenvolvimento, siga estas etapas:

1. Certifique-se de ter as seguintes dependências instaladas em seu sistema:
   - Node.js: [Download Node.js](https://nodejs.org/)
   - npm (Node Package Manager): Normalmente instalado junto com o Node.js
   - Docker: [Download Docker](https://www.docker.com/get-started)

2. Clone o repositório do projeto para o seu ambiente local.

3. Navegue até a pasta raiz do projeto.

4. Execute o seguinte comando para iniciar os contêineres Docker que hospedam o RabbitMQ e outros serviços auxiliares:

   ```bash
   docker-compose up
   ```

   Este comando lerá as configurações do arquivo `docker-compose.yml` e iniciará os contêineres necessários.

5. Agora, você pode iniciar o servidor NestJS e o cliente Next.js. Consulte a [documentação específica](docs/definição_da_aplicação.md] dessas partes da aplicação para obter detalhes sobre como iniciar cada um deles.

# Tags

* [SPRINT 1](https://github.com/2023M7T1-Inteli/Grupo-3/releases/tag/sprint-1):
  * Entendimento de Negócios
  * Entendimento do Usuário
  * MVP com deploy da aplicação com arquitetura básica
  * Requisitos do Sistema
* [SPRINT 2](https://github.com/2023M7T1-Inteli/Grupo-3/releases/tag/sprint-2):
  * Arquitetura corporativa
  * Front-end concluído
  * Back-end concluído
  * Artigo V1
* [SPRINT 3](https://github.com/2023M7T1-Inteli/Grupo-3/releases/tag/sprint-3):
  * Modelagem e Implementação.
  * Relatório Técnico
  * Artigo V2.
* [SPRINT 4](https://github.com/2023M7T1-Inteli/Grupo-3/releases/tag/sprint-4):
  * Testes do sistema.
  * Definição da aplicação.
  * Artigo V3.
* [SPRINT 5](https://github.com/2023M7T1-Inteli/Grupo-3):
  * Refinamentos da aplicação
  * Apresentação final
  * Artigo Completo

# Licença

<table>
  <tr><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"></tr>
</table>

<table>
  <tr><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></tr>
</table>

[Application 4.0 International](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1)

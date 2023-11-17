# Descrição de Fluxos Alternativos

## Índice

1. [Introdução](#introdução)
2. [Carrinho de Compras](#carrinho-de-compras)
    - [Adição de Mais um Tipo de Produto](#adição-de-mais-um-tipo-de-produto)
    - [Desistência de Compra](#desistência-de-compra)
    - [Armazenamento Local](#armazenamento-local)
    - [Bloqueio de Progresso](#bloqueio-de-progresso)
3. [Endereço de Entrega](#endereço-de-entrega)
    - [Preenchimento Incorreto ou Inválido](#preenchimento-incorreto-ou-inválido)
4. [Método de Pagamento](#método-de-pagamento)
    - [Preenchimento Incorreto ou Inválido](#preenchimento-incorreto-ou-inválido-1)
    - [Múltiplos Métodos de Pagamento](#múltiplos-métodos-de-pagamento)
5. [Conclusão](#conclusão)

## Introdução

Este documento tem como objetivo definir, realizar e esclarecer os fluxos alternativos relacionados aos requisitos funcionais da Ton Store. Os requisitos funcionais em questão são: Carrinho de Compras (RF1, RF2, RF3), Endereço de Entrega (RF4) e Método de Pagamento (RF5).

## Carrinho de Compras

### Adição de Mais um Tipo de Produto

Conforme o RF1, o sistema permite que o usuário adicione produtos ao carrinho de compras. No caso de o usuário querer adicionar mais de um tipo de produto, o sistema atualiza automaticamente o carrinho para refletir essa mudança.

### Desistência de Compra

Em alinhamento com os requisitos RF1 e RF2, se o usuário optar por desistir da compra, o sistema oferece uma opção para "Esvaziar Carrinho", removendo todos os produtos adicionados.

### Armazenamento Local

O sistema armazena o estado do carrinho no armazenamento local do computador. Isso garante que os produtos adicionados ao carrinho permaneçam mesmo se o navegador for fechado, atendendo aos requisitos RF1 e RF2.

### Bloqueio de Progresso

Se o usuário tenta finalizar a compra com dados inválidos, o sistema bloqueia o progresso e exibe uma mensagem de erro na entrada correspondente, conforme o RF3.

## Endereço de Entrega

### Preenchimento Incorreto ou Inválido

No contexto do RF4, se o usuário inserir um endereço inválido ou incompleto, o sistema bloqueia o progresso e solicita que o usuário corrija os dados antes de prosseguir com a compra.

## Método de Pagamento

### Preenchimento Incorreto ou Inválido

Em relação ao RF5, se o usuário inserir informações inválidas ou incompletas para o método de pagamento, o sistema bloqueia o progresso e exibe uma mensagem de erro.

## Conclusão

Este documento esclarece os fluxos alternativos que o sistema pode encontrar durante sua operação. Esses fluxos são projetados para tornar o sistema mais robusta e amigável ao usuário, garantindo uma experiência de compra eficiente e segura.

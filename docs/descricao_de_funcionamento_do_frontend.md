# Descrição de funcionamento do frontend

Ton Store é uma loja online que oferece uma experiência de compra amigável ao usuário. O frontend é responsável por todas as interações do usuário com o sistema, desde a adição de produtos ao carrinho até o processo de checkout.

## Estrutura de Pastas

O frontend pode ser acessado no diretório `~/src/frontend/ton-store`. A estrutura de pastas é a seguinte:

```
~/src/frontend/ton-store
├── public
└── src
    └── app
        ├── bag
        ├── checkout
        │   ├── payment
        │   ├── shipping-details
        │   └── success
        ├── components
        ├── dashboard
        │   ├── order
        │   │   └── [id]
        │   └── product
        ├── interfaces
        ├── login
        ├── product
        │   └── [slug]
        └── track
            └── [email]
                └── [orderId]
```

## Tecnologias Utilizadas

### Frontend

O frontend é construído usando o [Next.js](https://nextjs.org/), um framework popular para renderização do lado do servidor com React. A linguagem de programação utilizada é o [TypeScript](https://www.typescriptlang.org/), que adiciona tipagem estática ao JavaScript, tornando o código mais seguro e legível. Para estilização, utilizamos a biblioteca [Tailwind CSS](https://tailwindcss.com/), que permite criar designs responsivos de forma eficiente.

## Vídeo Demonstrativo

Aqui está um vídeo demonstrativo do sistema em funcionamento:

[Link para o vídeo demonstrativo](https://youtu.be/si8-Aoz2QWQ)

## Configuração

1. Navegue para a pasta `~/src/frontend/ton-store`.
2. Instale as dependências com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.

## Descrição dos Diretórios

- **bag**: Contém a lógica e os componentes relacionados ao carrinho de compras.
- **checkout**: Gerencia o processo de checkout e é subdividido em:
  - **payment**: Lida com a seleção e validação do método de pagamento.
  - **shipping-details**: Gerencia o formulário de inserção e validação do endereço de entrega.
  - **success**: Exibe a página de sucesso após a conclusão do checkout.
- **components**: Contém componentes reutilizáveis em todo o aplicativo.
- **dashboard**: Contém a lógica e os componentes para o painel do usuário, incluindo:
  - **order**: Gerencia as informações de pedidos individuais.
  - **product**: Gerencia a listagem de produtos.
- **interfaces**: Contém as interfaces TypeScript usadas em todo o projeto.
- **login**: Gerencia a autenticação do usuário.
- **product**: Contém a lógica e os componentes para páginas de produtos individuais.
- **track**: Permite o rastreamento de pedidos com base no e-mail e ID do pedido.

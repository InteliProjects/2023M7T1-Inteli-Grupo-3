# Requisitos Funcionais e Não-Funcionais

## Requisitos Funcionais

### Carrinho de compras

- RF1: O sistema deve permitir que o usuário adicione produtos ao carrinho de compras. Essa informação deve ser guardada de forma que, em um acesso futuro, os itens adicionados permaneçam salvos. 

- RF2: O sistema deve exibir ao usuário os itens que foram previamente adicionados ao carrinho quando acessá-lo.

- RF3: O sistema deve remover um produto do carrinho de compras, caso o usuário escolha removê-lo ou finalize o processo de compra dele com sucesso. 

### Endereço de entrega

- RF4: O sistema deve permitir que o usuário cadastre um endereço de entrega, durante o processo de compra de um produto.

### Método de pagamento

- RF5: O sistema deve permitir que o usuário cadastre um método de pagamento, durante o processo de compra de um produto.

## Requisitos Não Funcionais

### RNF1: Velocidade da aplicação em casos comuns
O sistema deve ser construído de forma a garantir que 99% das páginas da aplicação de loja virtual devem ser carregadas para os usuários em, no máximo, 2 segundos em casos comuns de carga de acesso. Para testar o cumprimento desse requisito, serão realizados testes de carga que simulam o acesso simultâneo de múltiplos usuários. As características de qualidade ISO 25010 que esse requisito se relaciona são as de desempenho e de usabilidade.

### RNF2: Velocidade da aplicação em picos de tráfego
O sistema deve ser construído de forma a garantir que 90% das páginas da aplicação de loja virtual devem ser carregadas para os usuários em, no máximo, 4 segundos em casos de pico de tráfego, que seriam cenários de 35 mil acessos por segundo. Para testar o cumprimento desse requisito, serão realizados testes de carga que simulam o acesso simultâneo de múltiplos usuários. As características de qualidade ISO 25010 que esse requisito se relaciona são as de desempenho e de usabilidade.

### RNF3: Picos de acesso
O sistema deve ser capaz de suportar uma carga de 35 mil acessos simultâneos por segundo, sem comprometer o desempenho. Para verificar o cumprimento desse requisito, uma segunda aplicação voltada para a realização de testes eficazes e automatizados será desenvolvida, usando a ferramenta Grafana k6. A característica de qualidade ISO 25010 que esse requisito se relaciona é a de desempenho.

### RNF4: Elasticidade
O sistema deve ser capaz de alocar recursos, como processadores e banco de dados, de maneira elástica. Nesse sentido, o uso de recursos deve aumentar ou diminuir dinamicamente visando suportar o que está sendo exigido e economizar custos, conforme o necessário. Para isso, serviços da AWS que garantem essa elasticidade, como o Amazon EC2 Auto Scaling, o Amazon ECS e o Amazon RDS Auto Scaling, serão implementados, e, visando testar se o sistema cumpre esse requisito, os serviços AWS de monitoramento também serão utilizados. A característica de qualidade ISO 25010 que esse requisito se relaciona é a de eficiência.

### RNF5: Intuitividade
O sistema deve permitir que um usuário encontre, por conta própria, o produto que ele está buscando em um tempo inferior a 5 segundos. Para isso, conceitos de UX Design serão aplicados durante a prototipação e o desenvolvimento das páginas e funcionalidades. A verificação do cumprimento desse requisito será feita por meio de testes com possíveis usuários da aplicação. A característica de qualidade ISO 25010 que esse requisito se relaciona é a de usabilidade.

### RNF6: Segurança de dados
O sistema deve ser projetado de maneira a garantir que os dados pessoais dos usuários estejam devidamente protegidos. Para tal, o desenvolvimento deve estar em conformidade com a LGPD, seguindo os devidos cuidados nos procedimentos incluindo coleta, armazenamento, processamento e compartilhamento das informações dos consumidores. A característica de qualidade ISO 25010 que esse requisito se relaciona é a de segurança.

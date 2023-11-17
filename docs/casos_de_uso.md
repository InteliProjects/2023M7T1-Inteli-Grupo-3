# Casos de Uso

## Sistema de Registro

### Escopo:
Sistema de gerenciamento de contas de usuários.

### Nível:
Nível do sistema.

### Ator:
Usuário.

### Interessados e Interesses:
Usuário: Deseja criar uma conta.

### Pré-Condições:
O sistema está em funcionamento.

### Pós-Condições:
O usuário pode acessar sua conta.

### Fluxo Básico:
Registro de Usuário:
O usuário inicia o processo de registro.
O sistema coleta informações de registro.
O sistema cria uma conta de usuário.

Login de Usuário:
O usuário realiza o login.
O sistema verifica as credenciais.
O usuário acessa sua conta.

### Fluxos Alternativos:
Registro de Usuário: Se o usuário já estiver registrado, ele pode optar por fazer login em vez de se registrar.

Login de Usuário: Se as credenciais forem inválidas, o usuário recebe uma mensagem de erro.

### Requisitos Especiais:
Sistema ser capaz de validar o usuário.

### Frequência de Ocorrência:
O registro e login de usuários são ações frequentes.

## Seleção de Planos

### Escopo:
Seleção de planos.

### Nível
Nível do sistema.

### Atores:
Usuário e Plano.

### Interessados e Interesses:
Usuário: Deseja selecionar planos.
Plano: Fornece informações sobre os planos disponíveis.

### Pré-Condições:
O sistema está em funcionamento.

O usuário está registrado ou realiza o registro.

Planos estão disponíveis.

### Pós-Condições:
O usuário pode selecionar um plano.

### Fluxo Básico:
O usuário navega pelos planos disponíveis.

O usuário seleciona um plano.

### Fluxos Alternativos:
O usuário pode cancelar a seleção do plano a qualquer momento.

### Lista de Variantes:
Os planos oferecidos podem variar em termos de recursos e preços.

### Frequência de Ocorrência:
A seleção de planos ocorre quando o usuário decide adquirir um plano.

## Pagamento

### Escopo: 
Processamento de pagamentos

### Nível: 
Nível do sistema.

### Atores:
Usuário e Pagamento

### Interessados e Interesses:
Usuário: Deseja criar uma conta, selecionar planos, fazer pagamentos e rastrear entregas.
Pagamento: Processa pagamentos dos usuários.

### Pré-condições:
O sistema está em funcionamento.
O usuário está registrado ou realiza o registro.
Pagamentos podem ser processados.

### Pós-condições:
O pagamento é registrado e validado.

### Fluxo Básico:
O usuário inicia o processo de pagamento.

O sistema coleta informações de pagamento.

O pagamento é processado e validado.

O sistema registra o pagamento.

### Fluxos Alternativos:
Se o pagamento não for aprovado, o usuário receberá uma notificação de erro.

### Requisitos Especiais:
O sistema deve ser capaz de processar pagamentos de forma segura.

### Lista de Variantes:
Diferentes métodos de pagamento podem ser suportados.

### Frequência de Ocorrência:
O pagamento ocorre quando o usuário decide adquirir um plano.

### Problemas em Aberto:
A segurança dos pagamentos online deve ser uma preocupação contínua.

## Rastreamento de Entrega

### Escopo: 
Rastreamento de entrega.

### Nível: 
Nível do sistema.

### Atores:
Usuário e Delivery

### Interessados e Interesses:
Usuário: Deseja rastrear entregas.
Delivery: Fornece informações de rastreamento de entrega.

### Pré-condições:
O sistema está em funcionamento.

O usuário está registrado ou realiza o registro.

Entregas podem ser rastreadas.

### Pós-condições:
O usuário pode rastrear a entrega.

### Fluxo Básico:
Rastreamento de Entrega:

O usuário verifica o status da entrega.

O sistema fornece o tempo estimado para a chegada.

### Fluxo Alternativo:
Se não houver entregas associadas à conta do usuário, o sistema informará que não há entregas para rastrear.

### Requisitos Especiais:
As informações de entrega devem ser atualizadas em tempo real.

### Frequência de Ocorrência:
O rastreamento de entrega é realizado ocasionalmente pelos usuários.

### Problemas em Aberto:
A precisão das informações de entrega deve ser mantida.

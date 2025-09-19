Pré-requisitos

Node.js instalado

Cypress instalado (npm install cypress)

Internet ativa

Como rodar o teste

Abra o terminal na pasta do projeto.

Execute:

npx cypress open


Na interface do Cypress, clique no arquivo de teste e execute-o.

Passo a Passo do Teste

Acessa o site

https://magento2-demo.magebit.com/

Cria uma conta

Clica em "Sign In" → "Create an Account"

Preenche nome, sobrenome, email único e senha

Clica em "Create an Account"

Busca e seleciona um produto

Pesquisa por "Zoe Tank"

Seleciona tamanho M e cor Yellow

Adiciona ao carrinho

Valida mensagem do carrinho

Confirma que aparece:
"You added Zoe Tank to your shopping cart."

Preenche o checkout

Preenche endereço de entrega (Rua, cidade, CEP, telefone)

Seleciona país e estado

Seleciona envio e pagamento

Marca método de envio

Clica em Continue

Confirma etapa de pagamento

Marca método de pagamento

Confirma endereço de cobrança igual ao de entrega

Finaliza a compra

Clica no botão "Place Order" quando estiver habilitado

Valida sucesso da compra

Mensagem final: "Thank you for your purchase!"

Boas práticas aplicadas

Espera pelos elementos antes de clicar (.should('be.visible'), .and('not.be.disabled'))

Pequenas pausas (cy.wait) para o carregamento da página

Emails únicos para cada teste

Validações após ações importantes

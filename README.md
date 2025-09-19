# 🛠️ Automação Cypress — Magento 2 Demo

 Contém instruções para rodar o teste E2E que cobre **criação de conta**, **busca/seleção de produto**, **checkout** e **finalização do pedido**. 🚀

---

## ✅ Pré-requisitos
- Node.js instalado  
- Cypress instalado:
```bash
npm install cypress --save-dev
```
- Internet ativa 🌐

---

## ▶️ Como rodar o teste
1. Abra o terminal na pasta do projeto.  
2. Execute:
```bash
npx cypress open
```
3. Na interface do Cypress, clique no arquivo de teste e execute-o.
1. Selecione E2E TESTING
2. Selecione Browser(Utilizado: Chrome)
3. Selecione a Spec: fluxo_magento.cy.js



---

## 🧭 Passo a Passo do Teste

1. **Acessa o site**  
   `https://magento2-demo.magebit.com/` 🔗

2. **Cria uma conta**  
   - Clica em **Sign In** → **Create an Account**  
   - Preenche: nome, sobrenome, **email único** e senha  
   - Clica em **Create an Account**  

   Exemplo de e-mail único (use no teste):
   ```js
   const uniqueEmail = `test+${Date.now()}@example.com`;
   ```

3. **Busca e seleciona um produto**  
   - Pesquisa por **"Zoe Tank"** 🔎  
   - Seleciona **tamanho M** e **cor Yellow**  
   - Adiciona ao carrinho 🛒

4. **Valida mensagem do carrinho**  
   Confirma que aparece:
   > "You added Zoe Tank to your shopping cart."
   ```js
   cy.contains('You added Zoe Tank to your shopping cart.').should('be.visible');
   ```

5. **Preenche o checkout**  
   - Preenche endereço de entrega: Rua, cidade, CEP, telefone  
   - Seleciona país e estado

6. **Seleciona envio e pagamento**  
   - Marca método de envio → **Continue**  
   - Marca método de pagamento → confirma cobrança igual ao endereço de entrega

   Exemplo de clique no botão Continue:
   ```js
   cy.get('button[data-role="opc-continue"], button.button.action.continue.primary')
     .should('be.visible')
     .and('not.be.disabled')
     .click();
   ```

7. **Finaliza a compra**  
   - Clica em **Place Order** quando o botão estiver habilitado:
   ```js
   cy.contains('Place Order').should('be.visible').and('not.be.disabled').click();
   ```

8. **Valida sucesso da compra**  
   - Mensagem final esperada: **"Thank you for your purchase!"**
   ```js
   cy.contains('Thank you for your purchase!').should('be.visible');
   ```

---

## 🧩 Boas práticas aplicadas
- Esperar elementos antes de interagir:  
  `.should('be.visible').and('not.be.disabled')` ✅  
- Pequenas pausas quando necessário: `cy.wait()` (usar com parcimônia) ⏱️  
- Usar emails únicos por teste para evitar conflitos (timestamp) 📧  
- Validar mensagens/estados após ações importantes 🔍

---

Boa automação! 💪🚀

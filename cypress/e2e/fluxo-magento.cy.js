describe('Create an Account - Fluxo Simples', () => {
  it('Deve criar uma conta com sucesso', () => {
    // Acessar o site
    cy.visit('https://magento2-demo.magebit.com/');

    // Clicar em "Sign In"
    cy.contains('Sign In').should('be.visible').click();

    // Clicar em "Create an Account"
    cy.contains('Create an Account').should('be.visible').click();

    // Preencher formulário de cadastro com email único
    const randomId = Math.floor(Math.random() * 10000); // Gera um id aleatório para email único
    cy.get('#firstname').type('Rafaela');
    cy.get('#lastname').type('Toni');
    cy.get('#email_address').type(`rafaela.toni${randomId}@example.com`);
    cy.get('#password').type('Rafaela123');
    cy.get('#password-confirmation').type('Rafaela123');

    // Enviar formulário
    cy.get('button[title="Create an Account"]')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Procurar produto
    cy.get('[name="q"]').type('Zoe Tank{enter}');
    cy.contains('.product-item-link', 'Zoe Tank')
      .should('be.visible')
      .click();
  
    // Selecionar tamanho M
    cy.get('div[aria-label="M"]')
      .should('be.visible')
      .click();

    // Selecionar cor Yellow
    cy.get('div[aria-label="Yellow"]')
      .should('be.visible')
      .click();

    // Adicionar ao carrinho
    cy.get('#product-addtocart-button')
      .should('be.visible')
      .click();

    // Validar mensagem de sucesso do carrinho
    cy.get('.message-success')
      .should('be.visible')
      .and('contain.text', 'You added Zoe Tank to your shopping cart.');

    // Acessar checkout
    cy.visit('https://magento2-demo.magebit.com/checkout/cart/');
    cy.visit('https://magento2-demo.magebit.com/checkout/#shipping');

    // Preencher endereço
    cy.get('select[name="region_id"]', { timeout: 20000 }).should('be.visible');
    cy.get('input[name="street[0]"]').type('Rua Bento de Barros, 112').blur().trigger('change');
    cy.get('[name="country_id"]').select('Brazil').trigger('change');
    cy.get('[name="region_id"]').select('São Paulo').trigger('change');
    cy.get('[name="city"]').type('Araraquara').blur().trigger('change');
    cy.get('[name="postcode"]').type('14810-035').blur().trigger('change');
    cy.get('[name="telephone"]').type('(11)99760-2248').blur().trigger('change');

    // Selecionar método de envio
    cy.get('input[type="radio"][value="flatrate_flatrate"]')
      .should('be.visible')
      .and('not.be.disabled')
      .check({ force: true });

    // Clicar em Continue no shipping
    cy.get('button.continue')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Validar que a etapa de Payment Method está visível
    cy.get('.payment-group > .step-title', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Payment Method');

    // Pequena espera para processamento do DOM
    cy.wait(1000);

    // Confirmar que o endereço de cobrança é o mesmo do shipping
    cy.get('.billing-address-same-as-shipping-block')
      .should('be.visible')
      .click();

    // Pequena espera para DOM processar seleção
    cy.wait(1000);

    // Clicar no botão de Place Order
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Opcional: validar mensagem de sucesso de checkout
    cy.get('.base', { timeout: 20000 })
      .should('be.visible')
      .and('contain.text', 'Thank you for your purchase!');
  });
});

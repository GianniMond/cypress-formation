describe('Correction 4 - Verifier le panier', () => {
  it('ouvre le panier et verifie le produit ajoute', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .contains('button', 'Add to cart')
      .click()

    cy.get('.shopping_cart_link').click()
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible')
  })
})

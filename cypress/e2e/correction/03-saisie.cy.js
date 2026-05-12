describe('Correction 3 - Ajouter un produit au panier', () => {
  it('ajoute un article et verifie le badge du panier', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .contains('button', 'Add to cart')
      .click()

    cy.get('.shopping_cart_badge').should('contain', '1')
  })
})

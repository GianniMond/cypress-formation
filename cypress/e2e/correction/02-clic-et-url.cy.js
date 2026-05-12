describe('Correction 2 - Se connecter', () => {
  it('remplit le formulaire et clique sur Login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })
})

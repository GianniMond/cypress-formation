describe('Correction 1 - Visiter SauceDemo', () => {
  it('ouvre la page de connexion', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').should('contain', 'Swag Labs')
  })
})

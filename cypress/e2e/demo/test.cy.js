describe('Demo courte hors exos', () => {
  it('verifie une page de la Kitchen Sink', () => {
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.contains('h1', 'Network Requests').should('be.visible')
    cy.contains('Get Comment').should('be.visible')
    cy.url().should('include', '/commands/network-requests')
    cy.get('.network-btn').first().should('be.visible')
  })
})
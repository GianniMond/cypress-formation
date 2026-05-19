import InventoryElements from './InventoryElements'

class InventoryPage {
  shouldBeOnInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get(InventoryElements.title).should('contain', 'Products')
  }
}

export default InventoryPage

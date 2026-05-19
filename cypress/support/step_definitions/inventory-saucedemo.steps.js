import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import InventoryPage from '../../integration/pages/inventoryPage/InventoryPage'

const inventoryPage = new InventoryPage()

Then('je dois etre connecte et voir la page Products', () => {
  inventoryPage.shouldBeOnInventoryPage()
})
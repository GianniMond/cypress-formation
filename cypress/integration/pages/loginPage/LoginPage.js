import LoginElements from './LoginElements'

class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  fillUsername(username) {
    cy.get(LoginElements.usernameInput).clear().type(username)
  }

  fillPassword(password) {
    cy.get(LoginElements.passwordInput).clear().type(password)
  }

  submit() {
    cy.get(LoginElements.loginButton).click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  shouldShowLoginError() {
    cy.get(LoginElements.errorBanner).should('be.visible')
    cy.url().should('not.include', '/inventory.html')
  }
}

export default LoginPage

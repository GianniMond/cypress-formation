import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../integration/pages/loginPage/LoginPage'

const loginPage = new LoginPage()

Given('je suis connecté à SauceDemo', () => {
  loginPage.visit()
})

When('je me connecte avec le username {string} et le password {string}', (username, password) => {
  loginPage.login(username, password)
})

Then('je dois voir un message d erreur de connexion', () => {
  loginPage.shouldShowLoginError()
})
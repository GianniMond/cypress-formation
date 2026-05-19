import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que je suis sur la page de connexion SauceDemo", () => {
  cy.visit("https://www.saucedemo.com");
});

When("je saisis le username {string}", (username) => {
  cy.get("#user-name").clear().type(username);
});

When("je saisis le password {string}", (password) => {
  cy.get("#password").clear().type(password);
});

When("je clique sur le bouton Login", () => {
  cy.get("#login-button").click();
});

Then("je suis redirige vers la page inventory", () => {
  cy.url().should("include", "/inventory.html");
});

Then("je vois le titre {string}", (title) => {
  cy.get(".title").should("contain", title);
});

Then("je vois un message d erreur", () => {
  cy.get("[data-test='error']").should("be.visible");
});

Then("je reste sur la page de connexion", () => {
  cy.url().should("not.include", "/inventory.html");
  cy.get("#login-button").should("be.visible");
});

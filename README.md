# Cypress Formation

Support de formation Cypress base sur https://www.saucedemo.com, avec des exercices simples et leurs corrections.

## Objectif

Ce projet sert a animer une initiation Cypress avec une progression pas a pas:

- Visiter une page
- Se connecter
- Interagir avec des elements UI
- Verifier les resultats avec des assertions
- Decouvrir un exemple Gherkin

## Prérequis

- Installer Node.js (version LTS)
- Installer Git
- Installer Visual Studio Code

## Vérification

node -v
npm -v
git --version

## Installation

```bash
npm install
```

## Lancer Cypress

Mode interface:

```bash
npx cypress open
```

Mode headless:

```bash
npx cypress run
```

## Identifiants SauceDemo utilises

- Utilisateur valide: standard_user
- Mot de passe: secret_sauce
- Utilisateur bloque (scenario echec): locked_out_user

## Structure du projet

- Exercices: [cypress/e2e/exercice](cypress/e2e/exercice)
- Corrections: [cypress/e2e/correction](cypress/e2e/correction)
- Step definitions (correction): [cypress/step_definitions](cypress/step_definitions)
- Support Cypress: [cypress/support](cypress/support)

## Parcours pedagogique

### Exercices Cypress (.cy.js)

1. [cypress/e2e/exercice/01-visite.cy.js](cypress/e2e/exercice/01-visite.cy.js)
2. [cypress/e2e/exercice/02-clic-et-url.cy.js](cypress/e2e/exercice/02-clic-et-url.cy.js)
3. [cypress/e2e/exercice/03-saisie.cy.js](cypress/e2e/exercice/03-saisie.cy.js)
4. [cypress/e2e/exercice/04-checkbox.cy.js](cypress/e2e/exercice/04-checkbox.cy.js)

### Corrections Cypress (.cy.js)

1. [cypress/e2e/correction/01-visite.cy.js](cypress/e2e/correction/01-visite.cy.js)
2. [cypress/e2e/correction/02-clic-et-url.cy.js](cypress/e2e/correction/02-clic-et-url.cy.js)
3. [cypress/e2e/correction/03-saisie.cy.js](cypress/e2e/correction/03-saisie.cy.js)
4. [cypress/e2e/correction/04-checkbox.cy.js](cypress/e2e/correction/04-checkbox.cy.js)

### Exemple Gherkin (.feature)

- Exercice a completer: [cypress/e2e/exercice/05-login-saucedemo.feature](cypress/e2e/exercice/05-login-saucedemo.feature)
- Correction complete: [cypress/e2e/correction/05-login-saucedemo.feature](cypress/e2e/correction/05-login-saucedemo.feature)
- Step definitions de correction: [cypress/support/step_definitions/05-login-saucedemo.correction.js](cypress/support/step_definitions/05-login-saucedemo.correction.js)


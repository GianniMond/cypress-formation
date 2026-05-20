// cy.intercept() intercepte uniquement les requetes XHR/fetch lancees depuis le navigateur
// cy.request() bypasse cy.intercept car il fait une requete directe (hors navigateur)
// Pour tester un mock, on utilise cy.window().then(win => win.fetch(...))

describe('Correction API - Mock avec cy.intercept()', () => {
  const petUrl = 'https://petstore.swagger.io/v2/pet/1'

  beforeEach(() => {
    cy.visit('https://petstore.swagger.io')
  })

  it('intercepte une requete fetch et retourne une reponse mockee', () => {
    cy.intercept('GET', petUrl, { fixture: 'pet' }).as('getPet')

    cy.window().then((win) => {
      return win.fetch(petUrl)
        .then((res) => res.json())
        .then((body) => {
          expect(body.name).to.eq('Fluffy (mocké)')
        })
    })

    cy.wait('@getPet').its('response.statusCode').should('eq', 200)
  })

  it('intercepte une requete et verifie qu elle a ete declenchee', () => {
    cy.intercept('GET', petUrl, { fixture: 'pet' }).as('getPet')

    cy.window().then((win) => win.fetch(petUrl))

    cy.wait('@getPet').its('response.statusCode').should('eq', 200)
  })
})

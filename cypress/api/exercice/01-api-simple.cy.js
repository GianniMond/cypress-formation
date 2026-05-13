describe('Exercice API 1 - Appels simples sur Petstore', () => {
  const apiUrl = 'https://petstore.swagger.io/v2'

  it('GET inventory repond en 200', () => {
    // TODO 1: faire un cy.request GET sur /store/inventory

    // TODO 2: verifier le status 200
  })

  it('GET pets available retourne une liste', () => {
    // TODO 1: faire un cy.request GET sur /pet/findByStatus?status=available

    // TODO 2: verifier le status 200

    // TODO 3: verifier que le body est un tableau
  })
})

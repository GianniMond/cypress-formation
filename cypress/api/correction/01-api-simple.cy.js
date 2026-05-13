describe('Correction API 1 - Appels simples sur Petstore', () => {
  const apiUrl = 'https://petstore.swagger.io/v2'

  it('GET inventory repond en 200', () => {
    cy.request('GET', `${apiUrl}/store/inventory`).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('GET pets available retourne une liste', () => {
    cy.request('GET', `${apiUrl}/pet/findByStatus?status=available`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
    })
  })
})

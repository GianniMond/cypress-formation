describe('Exercice API 2 - Assertions simples', () => {
	const apiUrl = 'https://petstore.swagger.io'

	it('GET un pet retourne id et name', () => {
		// TODO 1: faire un cy.request GET sur /v2/pet/1

		// TODO 2: verifier le status 200

		// TODO 3: verifier que response.body contient les proprietes id et name
	})

	it('GET inventory retourne un objet', () => {
		// TODO 1: faire un cy.request GET sur /v2/store/inventory

		// TODO 2: verifier que le body est un objet
	})
})

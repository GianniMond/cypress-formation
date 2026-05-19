describe('Exercice API 3 - POST simple', () => {
	const apiUrl = 'https://petstore.swagger.io'

	it('POST cree un nouveau pet', () => {
		// TODO 1: faire un cy.request POST sur /v2/pet avec le body:
		// {
		//   id: 9999,
		//   name: 'Fluffy',
		//   status: 'available'
		// }

		// TODO 2: verifier le status 200

		// TODO 3: verifier que response.body.name est egal a 'Fluffy'
	})

	it('POST puis GET pour verifier le pet cree', () => {
		// TODO 1: creer un pet avec id 9998

		// TODO 2: faire un GET sur /v2/pet/9998

		// TODO 3: verifier que le nom retourne correspond a celui envoye
	})
})

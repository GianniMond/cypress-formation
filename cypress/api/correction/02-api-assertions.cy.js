describe('Correction API 2 - Assertions simples', () => {
	const apiUrl = 'https://petstore.swagger.io'

	it('GET un pet retourne id et name', () => {
		cy.request('GET', `${apiUrl}/v2/pet/1`).then((response) => {
			expect(response.status).to.eq(200)
			expect(response.body).to.have.property('id')
			expect(response.body).to.have.property('name')
		})
	})

	it('GET inventory retourne un objet', () => {
		cy.request('GET', `${apiUrl}/v2/store/inventory`).then((response) => {
			expect(response.status).to.eq(200)
			expect(response.body).to.be.an('object')
		})
	})
})

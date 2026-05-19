describe('Correction API 3 - POST simple', () => {
	const apiUrl = 'https://petstore.swagger.io'

	it('POST cree un nouveau pet', () => {
		cy.request('POST', `${apiUrl}/v2/pet`, {
			id: 9999,
			name: 'Fluffy',
			status: 'available'
		}).then((response) => {
			expect(response.status).to.eq(200)
			expect(response.body.name).to.eq('Fluffy')
		})
	})

	it('POST puis GET pour verifier le pet cree', () => {
		const pet = {
			id: 9998,
			name: 'Rex',
			status: 'available'
		}

		cy.request('POST', `${apiUrl}/v2/pet`, pet).then((postResponse) => {
			expect(postResponse.status).to.eq(200)

			cy.request('GET', `${apiUrl}/v2/pet/${pet.id}`).then((getResponse) => {
				expect(getResponse.status).to.eq(200)
				expect(getResponse.body.name).to.eq(pet.name)
			})
		})
	})
})

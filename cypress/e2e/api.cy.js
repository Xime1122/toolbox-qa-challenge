describe('API Tests - Automation Exercise', () => {

  it('should get all products list successfully', () => {
    cy.request('GET', 'https://automationexercise.com/api/productsList')
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(3000)
        expect(response.headers).to.have.property('content-type')

        const body = typeof response.body === 'string'
          ? JSON.parse(response.body)
          : response.body

        expect(body.responseCode).to.eq(200)
        expect(body.products).to.be.an('array')
        expect(body.products).to.not.be.empty
      })
  })

  it('should get all brands list successfully', () => {
    cy.request('GET', 'https://automationexercise.com/api/brandsList')
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(3000)
        expect(response.headers).to.have.property('content-type')

        const body = typeof response.body === 'string'
          ? JSON.parse(response.body)
          : response.body

        expect(body.responseCode).to.eq(200)
        expect(body.brands).to.be.an('array')
        expect(body.brands).to.not.be.empty
      })
  })

})
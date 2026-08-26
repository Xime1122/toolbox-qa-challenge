describe('Echo Server API Tests', () => {

  describe('POST /echo', () => {

    it('should return the same text sent in the request', () => {

      const testText = 'Toolbox QA'

      cy.request({
        method: 'POST',
        url: 'https://echo-serv.tbxnet.com/v1/echo',
        qs: {
          text: testText
        }
      }).then((response) => {

        // Status code
        expect(response.status).to.eq(200)

        // Response time
        expect(response.duration).to.be.lessThan(3000)

        // Headers
        expect(response.headers).to.have.property('content-type')
        expect(response.headers['content-type'])
          .to.include('application/json')

        // Required field
        expect(response.body).to.have.property('text')

        // Data type
        expect(response.body.text).to.be.a('string')

        // Business validation
        expect(response.body.text).to.eq(testText)
      })
    })


    it('should return an error when required text parameter is missing', () => {

      cy.request({
        method: 'POST',
        url: 'https://echo-serv.tbxnet.com/v1/echo',
        failOnStatusCode: false
      }).then((response) => {

        // Expected documented error
        expect(response.status).to.eq(400)

        // Response time
        expect(response.duration).to.be.lessThan(3000)

        // Headers
        expect(response.headers).to.have.property('content-type')
        expect(response.headers['content-type'])
          .to.include('application/json')

        // Error structure
        expect(response.body).to.have.property('code')
        expect(response.body).to.have.property('message')

        // Data types
        expect(response.body.code).to.be.a('string')
        expect(response.body.message).to.be.a('string')
      })
    })

  })


  describe('GET /system/version', () => {

    it('should return the system version information successfully', () => {

      cy.request({
        method: 'GET',
        url: 'https://echo-serv.tbxnet.com/v1/system/version'
      }).then((response) => {

        // Status code
        expect(response.status).to.eq(200)

        // Response time
        expect(response.duration).to.be.lessThan(3000)

        // Headers
        expect(response.headers).to.have.property('content-type')
        expect(response.headers['content-type'])
          .to.include('application/json')

        // Required fields
        expect(response.body).to.have.property('ok')
        expect(response.body).to.have.property('date')
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('version')
        expect(response.body).to.have.property('env')
        expect(response.body).to.have.property('serverName')

        // Data types and values
        expect(response.body.ok).to.be.a('boolean')
        expect(response.body.ok).to.eq(true)

        expect(response.body.date).to.be.a('string')
        expect(response.body.date).to.not.be.empty

        expect(response.body.name).to.be.a('string')
        expect(response.body.name).to.eq('tbx-echo-server')

        expect(response.body.version).to.be.a('string')
        expect(response.body.version).to.not.be.empty

        expect(response.body.env).to.be.a('string')
        expect(response.body.serverName).to.be.a('string')
      })
    })

  })

})
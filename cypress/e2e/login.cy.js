describe('Login - Automation Exercise', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('a', 'Signup / Login').click()

    cy.get('input[data-qa="login-email"]')
      .type(Cypress.env('testEmail'))

    cy.get('input[data-qa="login-password"]')
      .type(Cypress.env('testPassword'), { log: false })

    cy.get('button[data-qa="login-button"]').click()

    cy.contains('Logged in as').should('be.visible')
  })
})
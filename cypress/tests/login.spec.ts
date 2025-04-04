describe('Login', () => {
  it('Sucessfuly', () => {
    cy.visit('/signin')
    cy.get('#username').type("Dina20")
    cy.get('#password').type("s3cret")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="sidenav-signout"]').should("be.visible")

  });
});

describe('Login', () => {
  it('Invalid credentials', () => {
    cy.visit('/signin')
    cy.get('#username').type("teste")
    cy.get('#password').type("teste")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').should("be.visible")
    
  });
});
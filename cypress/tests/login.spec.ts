describe('Login', () => {

  const selectorsList= {
    usernameField: "#username",
    passwordField: "#password",
    loginButtom: '[data-test="signin-submit"]',
    logoutButtom: '[data-test="sidenav-signout"]',
    wrongAlert: '[data-test="signin-error"]',
  }

  it('Sucessfuly', () => {  
    cy.visit('/signin')
    cy.get(selectorsList.usernameField).type("Dina20")
    cy.get(selectorsList.passwordField).type("s3cret")
    cy.get(selectorsList.loginButtom).click()
    cy.get(selectorsList.logoutButtom).should("be.visible")
  });

  it('Invalid credentials', () => {
    cy.visit('/signin')
    cy.get(selectorsList.usernameField).type("teste")
    cy.get(selectorsList.passwordField).type("teste")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').should("be.visible")    
  });
});


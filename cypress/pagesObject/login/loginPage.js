class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[id="user-name"]'),
    passwordInput: () => cy.get('input[id="password"]'),
    loginBtn: () => cy.get('input[id="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  visit() {
    cy.visit(Cypress.env('sauceDemo_url'));
  }

  login(username = Cypress.env('sauceDemo_user'), password = Cypress.env('sauceDemo_pass')) {
    this.visit();
    this.elements.usernameInput().clear().type(username);
    this.elements.passwordInput().clear().type(password);
    this.elements.loginBtn().click();
  }
}

export default new LoginPage();

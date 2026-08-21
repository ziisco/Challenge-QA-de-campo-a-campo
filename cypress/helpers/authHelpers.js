export class AuthHelper {
  static login(credentials) {
    return cy.request({
      method: 'POST',
      url: '/auth/login',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: credentials
    });
  }
}

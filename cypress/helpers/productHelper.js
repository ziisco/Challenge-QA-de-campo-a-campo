export class ProductHelper {
  static getAllProducts() {
    return cy.request({
      method: 'GET',
      url: '/products',
      failOnStatusCode: false
    });
  }

  // Obtiene exactamente 3 productos al azar
  static getRandomProducts(count = 3) {
    return this.getAllProducts().then((response) => {
      expect(response.status).to.eq(200);
      const randomItems = Cypress._.sampleSize(response.body, count);
      return cy.wrap(randomItems);
    });
  }

  // Petición PUT a /products/{id}
  static updateProduct(productId, updatePayload) {
    return cy.request({
      method: 'PUT',
      url: `/products/${productId}`,
      failOnStatusCode: false,
      headers: { 'Content-Type': 'application/json' },
      body: updatePayload
    });
  }
}

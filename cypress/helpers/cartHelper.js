export class CartHelper {
  static buildPayload(userId, productsList) {
    return {
      userId: userId,
      date: new Date().toISOString().split('T')[0],
      products: productsList.map((item) => ({
        productId: item.id,
        quantity: 1
      }))
    };
  }

  static createCart(cartPayload) {
    return cy.request({
      method: 'POST',
      url: '/carts',
      failOnStatusCode: false,
      headers: { 'Content-Type': 'application/json' },
      body: cartPayload
    });
  }

  static updateCart(cartId, updatePayload) {
    return cy.request({
      method: 'PUT',
      url: `/carts/${cartId}`,
      failOnStatusCode: false,
      headers: { 'Content-Type': 'application/json' },
      body: updatePayload
    });
  }

  static deleteCart(cartId) {
    return cy.request({
      method: 'DELETE',
      url: `/carts/${cartId}`,
      failOnStatusCode: false
    });
  }
}

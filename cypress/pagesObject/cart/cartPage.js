class CartPage {
  // Elements / Selectors
  elements = {
    cartTitle: () => cy.get('[data-test="title"]'),
    cartItems: () => cy.get('[data-test="inventory-item"]'),
    itemQuantities: () => cy.get('[data-test="item-quantity"]'),
    itemNames: () => cy.get('[data-test="inventory-item-name"]'),
    itemPrices: () => cy.get('[data-test="inventory-item-price"]'),
    checkoutBtn: () => cy.get('[data-test="checkout"]')
  };

  // Validaciones de Carrito
  verifyCartItemCount(expectedCount) {
    this.elements.cartItems().should('have.length', expectedCount);
  }

  verifyProductQuantities() {
    this.elements.itemQuantities().each(($qty) => {
      cy.wrap($qty).should('have.text', '1');
    });
  }

  verifyProductNames() {
    this.elements
      .itemNames()
      .should('contain', 'Sauce Labs Backpack')
      .and('contain', 'Sauce Labs Bike Light')
      .and('contain', 'Sauce Labs Bolt T-Shirt');
  }

  verifyIndividualPrices() {
    this.elements
      .itemPrices()
      .should('contain', '$29.99')
      .and('contain', '$9.99')
      .and('contain', '$15.99');
  }

  verifyCartInformation() {
    this.verifyCartItemCount(3);
    this.verifyProductQuantities();
    this.verifyProductNames();
    this.verifyIndividualPrices();
  }

  goToCheckout() {
    this.elements.checkoutBtn().should('be.visible').click();
  }
}

export default new CartPage();

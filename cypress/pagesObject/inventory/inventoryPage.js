class InventoryPage {
  // Elements / Selectors
  elements = {
    // Product selectors
    backpackAddBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    bikeLightAddBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    boltTshirtAddBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
    productBySlugAddBtn: (slug) => cy.get(`[data-test="add-to-cart-${slug}"]`),

    // Header & Cart Navigation
    pageTitle: () => cy.get('.title'),
    cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
    cartBadge: () => cy.get('[data-test="shopping-cart-badge"]')
  };

  //Functions / Methods
  addBackpack() {
    this.elements.backpackAddBtn().should('be.visible').click();
  }

  addBikeLight() {
    this.elements.bikeLightAddBtn().should('be.visible').click();
  }

  addBoltTshirt() {
    this.elements.boltTshirtAddBtn().should('be.visible').click();
  }

  addProductBySlug(slug) {
    this.elements.productBySlugAddBtn(slug).should('be.visible').click();
  }

  addThreeDefaultProducts() {
    this.addBackpack();
    this.addBikeLight();
    this.addBoltTshirt();
  }

  goToCart() {
    this.elements.cartLink().should('be.visible').click();
  }
}

module.exports = new InventoryPage();

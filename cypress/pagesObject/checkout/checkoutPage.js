class CheckoutPage {
  // Elements / Selectors
  elements = {
    // Step 1: Form
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),

    // Step 2: Overview (Información mostrada antes de finalizar)
    subtotalLabel: () => cy.get('[data-test="subtotal-label"]'),
    taxLabel: () => cy.get('[data-test="tax-label"]'),
    totalLabel: () => cy.get('[data-test="total-label"]'),
    finishBtn: () => cy.get('[data-test="finish"]'),

    // Step 3: Complete (Confirmación final)
    completeHeader: () => cy.get('[data-test="complete-header"]'),
    completeText: () => cy.get('[data-test="complete-text"]')
  };

  // Action Methods
  fillInformation(firstName = 'Juan', lastName = 'Pérez', postalCode = '1001') {
    this.elements.firstNameInput().should('be.visible').clear().type(firstName);
    this.elements.lastNameInput().should('be.visible').clear().type(lastName);
    this.elements.postalCodeInput().should('be.visible').clear().type(postalCode);
    this.elements.continueBtn().should('be.visible').click();
  }

  verifyOverviewSummary() {
    this.elements.subtotalLabel().should('be.visible').and('contain.text', 'Item total: $55.97');
    this.elements.taxLabel().should('be.visible').and('contain.text', 'Tax: $4.48');
    this.elements.totalLabel().should('be.visible').and('contain.text', 'Total: $60.45');
  }

  finishOrder() {
    this.elements.finishBtn().should('be.visible').click();
  }

  verifyOrderSuccess() {
    this.elements
      .completeHeader()
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');

    this.elements
      .completeText()
      .should('be.visible')
      .and('contain.text', 'Your order has been dispatched');
  }
}

export default new CheckoutPage();

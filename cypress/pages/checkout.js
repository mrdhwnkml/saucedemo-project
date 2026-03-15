class CheckoutPage {
  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click();
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click();
  }

  verifyOrderComplete() {
    cy.url().should("include", "/checkout-complete.html");
  }

  verifyConfirmationMessage() {
    cy.get('[data-test="complete-header"]').should(
      "have.text",
      "Thank you for your order!",
    );
  }

  clickBackHome() {
    cy.get('[data-test="back-to-products"]').click();
  }
}

export default new CheckoutPage();

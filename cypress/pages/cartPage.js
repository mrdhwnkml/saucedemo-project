class CartPage {
  // Verify Product Appear Cart
  verifyProductInCart() {
    cy.get('[data-test="inventory-item-name"]').should("exist");
  }

  // Verify Quantity
  verifyQuantity(expectedQty = 1) {
    cy.get('[data-test="item-quantity"]').should(
      "have.text",
      expectedQty.toString(),
    );
  }

  // Verify Product name matches the selected item
  verifyProductMatch(productName) {
    cy.get('[data-test="inventory-item-name"]').should(
      "have.text",
      productName,
    );
  }
}

export default new CartPage();

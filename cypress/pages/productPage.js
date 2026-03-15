class ProductsPage {
  selectProduct(productName) {
    cy.contains(productName).click();
  }

  addToCart(productName) {
    // ubah nama produk ke format data-test
    const formattedName = productName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]/g, "");

    // klik tombol Add to Cart
    cy.get(`[data-test="add-to-cart-${formattedName}"]`).click();
  }

  goToCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}

export default new ProductsPage();

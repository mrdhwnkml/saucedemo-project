import loginPage from "../../pages/loginPage";
import productsPage from "../../pages/productPage";
import cartPage from "../../pages/cartPage";

describe("SauceDemo Add Product to Cart", () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture("users").as("users");
  });

  it("Add one product to cart and validate", function () {
    // 1. Login
    loginPage.login(this.users.standard_user, this.users.password);

    // 2. Select first product
    cy.get('[data-test="inventory-item-name"]')
      .first()
      .then(($product) => {
        const selectedProductName = $product.text();

        // 3. Add to cart
        productsPage.addToCart(selectedProductName);

        // 4. Go to cart
        productsPage.goToCart();

        // Validate product appears in cart
        cartPage.verifyProductInCart();

        // Validate quantity = 1
        cartPage.verifyQuantity();

        // Validate product name matches
        cartPage.verifyProductMatch(selectedProductName);
      });
  });
});

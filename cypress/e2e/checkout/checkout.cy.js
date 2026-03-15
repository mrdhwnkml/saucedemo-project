import loginPage from "../../pages/loginPage";
import productsPage from "../../pages/productPage";
import cartPage from "../../pages/cartPage";
import checkoutPage from "../../pages/checkout";

describe("SauceDemo Checkout Test", () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture("users").as("users");
  });

  it("Verify user can complete checkout", function () {
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

        // 5. Checkout process
        cy.get('[data-test="checkout"]').click();

        // 6. Fill checkout info with random data
        const firstName = Math.random().toString(36).substring(2, 7);
        const lastName = Math.random().toString(36).substring(2, 7);
        const postalCode = Math.floor(Math.random() * 90000) + 10000;

        checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();

        // Verify order complete
        checkoutPage.verifyOrderComplete();

        // Verify Confirmation Message
        checkoutPage.verifyConfirmationMessage();

        // Return to product page
        checkoutPage.clickBackHome();

        // Verify back to products page
        cy.url().should("include", "/inventory.html");
      });
  });
});

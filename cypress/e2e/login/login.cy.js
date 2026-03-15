import loginPage from "../../pages/loginPage";
import productsPage from "../../pages/productPage";

describe("SauceDemo Login Tests", () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture("users").as("users");
  });

  it("Login with standard user", function () {
    loginPage.login(this.users.standard_user, this.users.password);

    // Validate
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Login with locked out user should show error", function () {
    loginPage.login(this.users.locked_out_user, this.users.password);

    // Validate

    loginPage
      .getErrorMessage()
      .should("contain", "Sorry, this user has been locked out");
    cy.url().should("eq", "https://www.saucedemo.com/");
  });

  it("Login with problem user", function () {
    loginPage.login(this.users.problem_user, this.users.password);

    // Validate
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Login with performance glitch user", function () {
    loginPage.login(this.users.performance_glitch_user, this.users.password);

    // Validate
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Login with error user", function () {
    loginPage.login(this.users.error_user, this.users.password);

    // Validate
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Login with visual user", function () {
    loginPage.login(this.users.visual_user, this.users.password);

    // Validate
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });
});

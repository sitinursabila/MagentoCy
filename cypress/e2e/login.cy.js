const loginPage = require("../support/pageObject/Login.js");
const userData = require("../fixtures/users.json");

describe("Login Tests", () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it("Success Login", () => {
    loginPage.login(userData.validUser.email, userData.validUser.password);
    cy.wait(2000);
    cy.url().should("include", "/customer/account/");
  });

  it("Failed Login - Invalid User", () => {
    loginPage.login(userData.invalidUser.email, userData.invalidUser.password);
    cy.wait(10000);
    cy.contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
  });
});

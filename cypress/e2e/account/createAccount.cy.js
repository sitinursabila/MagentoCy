import { navigateCreate, createAccount } from "../../support/pageObject/createAccount.js";
import { newUser,validUser } from "../../fixtures/users.json";

const timestamp = Date.now();
const email = `testuser_${timestamp}@example.com`;

describe("Create Account Test", () => {
  beforeEach(() => {
    navigateCreate();
  });
  //firstName, lastName, email, password, confirmPassword
  it("Success Create Account with Valid data", () => {
    createAccount(newUser.firstName, newUser.lastName, email, newUser.password, newUser.password );
    cy.wait(2000);
    cy.url().should("include", "/customer/account/");
  });
  it("Failed Create Account with email Exist", () => {
    createAccount(newUser.firstName, newUser.lastName, email, newUser.password, newUser.password );
    cy.wait(2000);
    cy.contains("There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
  });
  //There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.

});
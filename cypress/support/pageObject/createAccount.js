class createAccountPage {
    navigateCreate() {
      cy.visit('/customer/account/create/');
    }
  
    createAccount(firstName, lastName, email, password, confirmPassword) {
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(confirmPassword);
      cy.get('.action.submit.primary').click();
    }
  }
  
  export default new createAccountPage();
  
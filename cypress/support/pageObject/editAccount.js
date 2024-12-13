class editAccountPage {
 
  navigateEdit() {
    cy.visit('/customer/account/edit/');
  }

  
  editAccount(firstName, lastName, email, currentPassword, newPassword, confirmPassword) {
    cy.get('#firstname').clear().type(firstName);
    cy.get('#lastname').clear().type(lastName);
    cy.get('#change-email').check().should('be.checked');
    cy.get("#change-password").check().should('be.checked');
    cy.get('#email').clear().type(email);
    cy.get('#current-password').clear().type(currentPassword);
    cy.get('#password').clear().type(newPassword);
    cy.get('#password-confirmation').clear().type(confirmPassword);
    cy.get('.action.save.primary').click();
  }
}
export default new editAccountPage();

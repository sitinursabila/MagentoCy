
import {navigateEdit, editAccount} from "../../support/pageObject/editAccount.js";
import {navigate, login} from "../../support/pageObject/Login.js";
import {validUser, editUser} from "../../fixtures/users.json";
const timestamp = Date.now();
const email = `editUser_${timestamp}@example.com`;

describe('Edit Account Tests', () => {
    beforeEach(() => {
    navigate();
    login(validUser.email, validUser.password);
    navigateEdit();
    });

    it('Update account information successfully with valid data', () => {
        editAccount(
            editUser.firstName,
            editUser.lastName, 
            email, 
            editUser.currentPassword, 
            editUser.newPassword, 
            editUser.confirmPassword)

        cy.wait(2000);
        cy.url().should("include", "/customer/account/");
        // cy.contains("You saved the account information.");
        // task simpan email baru
            cy.task('updateFixture', {
            fileName: 'users',
            key: 'validUser',
            validUser: {
              email:email ,
            }
          });         
    });     
   
});

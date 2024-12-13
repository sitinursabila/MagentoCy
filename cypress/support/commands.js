// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('#send2').click();
  });
  
  Cypress.Commands.add('addToCart', (productName) => {
    cy.visit('/');
    cy.contains(productName).click();
    cy.get('#product-addtocart-button').click();
  });
  
  Cypress.Commands.add('verifyVisible', (selector) => {
    cy.get(selector).should('be.visible');
  });
  
  Cypress.Commands.add('verifyContain', (selector, text) => {
    cy.get(selector).should('contain.text', text);
  });
  
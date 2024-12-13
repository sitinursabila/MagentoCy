class CheckoutPage {
    proceedToCheckout(address) {
      cy.visit('/checkout/');
      cy.get('#billing-address-firstname').type(address.firstName);
      cy.get('#billing-address-lastname').type(address.lastName);
      cy.get('#billing-address-street1').type(address.street);
      cy.get('#billing-address-city').type(address.city);
      cy.get('#billing-address-region').select(address.state);
      cy.get('#billing-address-postcode').type(address.postcode);
      cy.get('#billing-address-telephone').type(address.phone);
      cy.contains('Place Order').click();
    }
  }
  
  export default new CheckoutPage();
  
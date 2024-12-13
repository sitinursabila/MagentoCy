const ProductPage = require("../support/pageObject/product.js");

describe('Product Selection', () => {
  it('should add a product to the cart', () => {
    cy.visit('/');
    ProductPage.selectProduct('Joust Duffle Bag');
    ProductPage.addToCart();
    cy.contains('added to your shopping cart').should('exist');
  });
});

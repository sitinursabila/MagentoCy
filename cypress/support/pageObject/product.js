class ProductPage {
  selectProduct(productName) {
    cy.contains(productName).click();
  }

  addToCart() {
    cy.contains('Add to Cart').click();
  }
}

export default new ProductPage();

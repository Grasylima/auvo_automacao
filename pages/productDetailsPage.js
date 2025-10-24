// pages/productDetailsPage.js
const BasePage = require('./basePage');

class ProductDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.name = '.inventory_details_name';
    this.price = '.inventory_details_price';
    this.description = '.inventory_details_desc';
    this.addToCartBtn = 'button.btn_primary';
    this.removeBtn = 'button.btn_secondary';
  }

  async getName() {
    return await this.getText(this.name);
  }

  async getPrice() {
    return await this.getText(this.price);
  }

  async getDescription() {
    return await this.getText(this.description);
  }

  async addToCart() {
    // tenta clicar em "Add to cart"
    if (await this.isVisible(this.addToCartBtn)) {
      await this.click(this.addToCartBtn);
    } else {
      // fallback: find button by text
      await this.page.locator('button', { hasText: 'Add to cart' }).click();
    }
  }
}

module.exports = ProductDetailsPage;

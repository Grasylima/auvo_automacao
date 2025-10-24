const BasePage = require('./basePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutButton = '#checkout';
  }

  async prosseguirParaCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;

// pages/productsPage.js
const BasePage = require('./basePage');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productItem = '.inventory_item';
    this.inventoryName = '.inventory_item_name';
    this.addToCartButton = '.btn_inventory';
    this.cartIcon = '.shopping_cart_link';
    this.pageTitle = '.title';
  }

  async isAtProductsPage() {
    return (await this.getText(this.pageTitle)).toLowerCase().includes('products');
  }

  async findProductByName(name) {
    const items = this.page.locator(this.productItem);
    const count = await items.count();
    for (let i = 0; i < count; i++) {
      const title = await items.nth(i).locator(this.inventoryName).innerText();
      if (title.trim().toLowerCase().includes(name.toLowerCase())) {
        return items.nth(i);
      }
    }
    return null;
  }

  async addProductToCart(name) {
    const item = await this.findProductByName(name);
    if (!item) throw new Error(`Produto não encontrado: ${name}`);
    await item.locator(this.addToCartButton).click();
  }

  async openProductByName(name) {
    const item = await this.findProductByName(name);
    if (!item) throw new Error(`Produto não encontrado: ${name}`);
    await item.locator(this.inventoryName).click();
  }

  async goToCart() {
    await this.click(this.cartIcon);
  }
}

module.exports = ProductsPage;

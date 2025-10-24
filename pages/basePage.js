// pages/basePage.js
class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto(path) {
    await this.page.goto(path);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, value) {
    await this.page.fill(selector, value);
  }

  async getText(selector) {
    return (await this.page.locator(selector).innerText()).trim();
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }
}

module.exports = BasePage;

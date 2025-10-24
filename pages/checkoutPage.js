const BasePage = require('./basePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
  }

  async preencherInformacoes(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finalizarPedido() {
    await this.page.click(this.finishButton);
  }
}

module.exports = CheckoutPage;

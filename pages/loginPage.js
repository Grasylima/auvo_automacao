// pages/loginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
  }

  async visitar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fazerLogin(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async clicarNoBotaoSubmit() {
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage; // ✅ export correto para require()

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.mensagemErro = '[data-test="error"]'; // seletor do elemento de erro
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

  // ✅ Adiciona este método para o teste de login inválido
  async capturarMensagemDeErro() {
    return await this.page.textContent(this.mensagemErro);
  }
}

module.exports = LoginPage;

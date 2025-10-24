import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

let loginPage;

test.describe('Página de Login - Testes de Funcionalidade', () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.visitar();
  });

  // Teste de login com sucesso
  test('Deve direcionar para a página de produtos após login com sucesso', async ({ page }) => {
    await loginPage.fazerLogin('standard_user', 'secret_sauce');
    await loginPage.clicarNoBotaoSubmit();

    const urlAtual = await loginPage.obterUrlAtual();
    expect(urlAtual).toBe('https://www.saucedemo.com/inventory.html');

    const textoCabecalho = await loginPage.obterTextoCabecalho();
    expect(textoCabecalho).toBe('Products');

  });
 // Teste de login com falha
  //test('Deve exibir mensagem de erro ao tentar fazer login com usuário inválido', async ({ page }) => {
   // await loginPage.fazerLogin('usuario_invalido', 'senha_invalida');
   // await loginPage.clicarNoBotaoSubmit();

  //  const mensagemErro = await loginPage.capturarMensagemDeErro();
  //  expect(mensagemErro).toContain('Username and password do not match');

 // });
 
});

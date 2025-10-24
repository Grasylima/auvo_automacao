const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

test('Fluxo completo de compra', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.visitar();
  await loginPage.fazerLogin('standard_user', 'secret_sauce');
  await page.pause(); // pausa para inspeção
  await loginPage.clicarNoBotaoSubmit();

  // Adicionar produto
  await productsPage.addProductToCart('Sauce Labs Backpack');
  await page.pause();
  await productsPage.goToCart();

  // Carrinho
  await cartPage.prosseguirParaCheckout();

  // Checkout
  await checkoutPage.preencherInformacoes('Grasielle', 'Lima', '70000-000');
  await page.pause();
  await checkoutPage.finalizarPedido();

  // Validação final
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

# Desafio Auvo – Automação de Testes Web com Playwright

[![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-green?logo=playwright)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-blue?logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

## Descrição do Projeto

Este projeto é uma **Prova de Conceito (POC)** de automação de testes desenvolvida para o **Desafio Auvo**.  
O objetivo é validar o fluxo completo de **cadastro e pesquisa de produtos** no site de e-commerce fictício [https://www.saucedemo.com/](https://www.saucedemo.com/).

A automação foi implementada utilizando **Playwright** com **JavaScript**, aplicando a arquitetura **Page Object Model (POM)** para garantir modularidade, manutenibilidade e clareza no código.

---

## Cenários Automatizados

Os testes cobrem integralmente o fluxo exigido:

1. **Login**  
   - Acessa o site e realiza login com credenciais válidas (`standard_user / secret_sauce`).

2. **Navegação e Pesquisa**  
   - Acessa a listagem de produtos.  
   - Simula uma pesquisa por produto (via filtragem/seleção).

3. **Validação do Produto**  
   - Seleciona um produto e valida **título, preço e descrição**.

4. **Adicionar ao Carrinho e Checkout**  
   - Adiciona o produto ao carrinho.  
   - Valida o item adicionado.  
   - Navega até o checkout.

5. **Finalização de Pedido**  
   - Preenche dados de checkout.  
   - Finaliza o pedido e valida a mensagem de sucesso.

---

## Estrutura do Projeto

```
📦 auvo_automacao
├── 📁 .github/workflows
│   └── playwright.yml             # Pipeline CI/CD do Playwright
├── 📁 .vscode
│   └── settings.json              # Configurações locais do VSCode
├── 📁 node_modules                # Dependências do projeto
├── 📁 pages                       # Páginas seguindo o padrão POM
│   ├── basePage.js                # Classe base para reuso
│   ├── cartPage.js                # Página do Carrinho
│   ├── checkoutPage.js            # Página de Checkout
│   ├── loginPage.js               # Página de Login
│   ├── productDetailsPage.js      # Página de Detalhes do Produto
│   └── productsPage.js            # Página de Produtos
├── 📁 playwright-report            # Relatórios HTML gerados após execução
├── 📁 test-results                 # Resultados e logs de execução
│   └── *.json
├── 📁 tests
│   ├── fluxoCompra.spec.js        # Cenário de fluxo completo de compra
│   └── login.spec.js              # Cenário isolado de login
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js           # Configuração global do Playwright
└── README.md                      # Documentação do projeto
```

---

## Tecnologias Utilizadas

- **Node.js**  
- **Playwright**  
- **JavaScript (ES6+)**  
- **Page Object Model (POM)**  

---

## Pré-requisitos

- Node.js **v18+**
- npm (instalado junto com Node.js)

---

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/Grasylima/auvo_automacao.git
   cd auvo_automacao
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Instale os navegadores necessários:

   ```bash
   npx playwright install
   ```

---

##  Execução dos Testes

### Rodar todos os testes
```bash
npx playwright test
```

### Modo interativo (UI)
```bash
npx playwright test --ui
```

###  Gerar relatório HTML
```bash
npx playwright test --reporter=html
```

Após a execução, abra o relatório:

```bash
npx playwright show-report
```

---

## Decisões e Suposições Técnicas

- O site `https://www.saucedemo.com/` não possui busca textual, portanto o teste de pesquisa foi interpretado como **filtragem/seleção de produto**.  
- Foi adotado o padrão **Page Object Model (POM)** para garantir isolamento de responsabilidades entre páginas.  
- As credenciais padrão fornecidas foram utilizadas:
  ```
  Usuário: standard_user
  Senha: secret_sauce
  ```

---

## 🧾 Exemplo de Execução com Log

```bash
npx playwright test tests/fluxoCompra.spec.js --headed --slow-mo 500
```

---

## 📊 Relatórios e Logs

O Playwright gera automaticamente relatórios de execução:

- **HTML:** para visualização amigável (`npx playwright show-report`)  
- **JSON:** para integração com CI/CD, se necessário.

---

## Autora

**👩 Grasielle Lima**  
💼 QA Engineer / Test Automation  
🔗 [GitHub – Grasylima](https://github.com/Grasylima)  
💌 [Contato profissional](mailto:grasielle.lima@gmail.com)

---

## 📸 Resultado Esperado

> 💡 Dica: Inclua aqui um print do relatório HTML do Playwright após a execução dos testes.
>
> ![Exemplo de execução Playwright](docs/demo-run.png)


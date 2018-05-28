# Pavo eslint configuration

[![Greenkeeper badge](https://badges.greenkeeper.io/jamiemagique/eslint-config-pavo.svg)](https://greenkeeper.io/)
![Status](https://david-dm.org/jamiemagique/eslint-config-pavo.svg)

Linting and Formatting with Prettier :nail_care:, built on top of Airbnb linting config.

## 1. Install

```
npm install eslint-config-pavo --save-dev
```

## 2. Usage

Create a `.eslintrc` file.

Add this configuration to extend:

```
{
  "extends": "eslint-config-pavo"
  "rules": {
    // Your projects overrides.
  }
}
```

You can layer multiple configurations depending upon your projects type:

```
{
  "extends": ["eslint-config-pavo", "eslint-config-pavo/<config-name>"]
}
```

Additional configs available are:

* react
* jest

## Prettier integration

### Visual Studio Code

Extensions:

* [Prettier - Code formatter (esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [ESLint (dbaeumer.vscode-eslint)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Sample `.vscode/settings.json` config:

```
{
  "eslint.options": {
    "configFile": ".eslintrc",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
    }
  },
  "eslint.enable": true,
  "prettier.eslintIntegration": true,
  "editor.renderWhitespace": "all",
  "editor.trimAutoWhitespace": true,
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.stylelintIntegration": true,
  "prettier.trailingComma": "all"
}
```

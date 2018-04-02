# Pavo eslint configuration

[![Greenkeeper badge](https://badges.greenkeeper.io/jamiemagique/eslint-config-pavo.svg)](https://greenkeeper.io/)

![Status](https://david-dm.org/jamiemagique/eslint-config-pavo.svg)

## 1. Install

```
npm install eslint-config-pavo --save-dev
```

## 2. Usage

Create a `.eslintrc` file.

Add this package as the configuration to extend:

```
{
  "extends": "eslint-config-pavo"
  "rules": {
    // Your projects overrides.
  }
}
```

You can layer multiple configurations provided depending upon the project type:

```
{
  "extends": ["eslint-config-pavo", "eslint-config-pavo/<config-name>"]
}
```

Additional config's:

* react
* jest

eslint-config-fagougou
===========================

[![npm version](https://badge.fury.io/js/eslint-config-fagougou.svg)](https://badge.fury.io/js/eslint-config-fagougou)

Shared ESLint configs by Fagougou.

## About

This package includes Vue plugins. You could use [eslint-config-fagougou-base](https://www.npmjs.com/package/eslint-config-fagougou-base) if you don't need Vue.

## Usage

You'll first need to install [ESlint](https://eslint.org/docs/user-guide/getting-started#installation-and-usage).

**With Yarn**

`yarn add --dev eslint`

**With NPM**

`$ npm install -D eslint-config-fagougou-base`

**.eslintrc** (Example)

```javascript

{
    "extends": ["eslint-config-fagougou"],
    "rules": {
        // your own rules
    }
}

```

## Rules

This config is base on ["eslint:recommended"](https://eslint.org/docs/rules/) and [JavaScript Standard Style](https://standardjs.com/).

You may like to see the [index.js](./index) file to see others rules.
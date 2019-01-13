eslint-config-fagougou-base
===========================

[![npm version](https://badge.fury.io/js/eslint-config-fagougou-base.svg)](https://badge.fury.io/js/eslint-config-fagougou-base)

Shared ESLint configs (without Vuejs plugins) by Fagougou.

## Usage

You'll first need to install [ESlint](https://eslint.org/docs/user-guide/getting-started#installation-and-usage).

**With Yarn**

`yarn add --dev eslint`

**With NPM**

`$ npm install -D eslint-config-fagougou-base`

**.eslintrc** (Example)

```javascript

{
    "extends": ["eslint-config-fagougou-base"],
    "rules": {
        // your own rules
    }
}

```

## Rules

This config is base on ["eslint:recommended"](https://eslint.org/docs/rules/) and [JavaScript Standard Style](https://standardjs.com/).

You may like to see the [index.js](./index.js) file to see others rules.

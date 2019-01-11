eslint-config-fagougou
===========================

[![npm version](https://badge.fury.io/js/eslint-config-fagougou.svg)](https://badge.fury.io/js/eslint-config-fagougou)

This is a extensible shared .eslintrc provided by Fagougou Hackers.

## About

This package includes Vuejs plugins. You can find [eslint-config-fagougou-base](https://www.npmjs.com/package/eslint-config-fagougou-base) if you don't use Vue.

## Usage

1. Install the package via NPM locally or globally
2. Put the package in your `.eslintrc`

```javascript

// .eslintrc

{
    "extends": "eslint-config-fagougou"
    "rule": {
        // put your own ESlint rules here
    }
}

```
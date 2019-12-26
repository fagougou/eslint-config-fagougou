eslint-config-fagougou
===========================

[![npm version](https://badge.fury.io/js/eslint-config-fagougou.svg)](https://badge.fury.io/js/eslint-config-fagougou)

Shared ESLint configs by Fagougou.

## Usage

### Built-in

This config is base on [JavaScript Standard Style](https://standardjs.com/).

`$ npm install -D eslint babel-eslint eslint-plugin-import eslint-config-fagougou`

**.eslintrc** (Example)

```javascript

{
    "extends": ["fagougou"],
    "rules": {
        // your own rules
    }
}

```

### React

This config is base on [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/README.md).

*Usage in Create React App Projects*

`$ npm install -D eslint-config-fagougou`

or

`$ yarn install --dev eslint-config-fagougou`


*Usage Outside of Create React App*

`npm install -D eslint-config-react-app @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x`

*.eslintrc*

```javascript

{
    "extends": [
        "react-app",
        "fagougou",
        "fagougou/react"
    ],
    "rules": {
        // your own rules
    }
}

```

### Vue

This config is base on [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue).

`$ npm install -D eslint babel-eslint eslint-config-fagougou eslint-plugin-vue eslint-plugin-import`

*.eslintrc*

```javascript

{
    "extends": [
        "fagougou",
        "fagougou/vue"
    ],
    "rule": {
        // your own rules
    }
}

```
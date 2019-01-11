module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: [
        'vue'
    ],
    extends: [
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    rules: {
        'vue/html-indent': ['error', 4],
        'import/no-duplicates': 1,
        'vue/no-reserved-keys': 0,
        'vue/no-use-v-if-with-v-for': 0,
        'vue/return-in-computed-property': 0,
        'vue/component-name-in-template-casing': 'off',
        'vue/max-attributes-per-line': 0,
        'vue/html-closing-bracket-newline': 0,
        'no-console': ['error', { allow: ['error'] }]
    }
}
module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:promise/recommended'
    ],
    rules: {
        'eol-last': ['error', 'always'],
        'no-undefined': 'error',
        'prefer-const': ['error', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': true
        }],
        'no-console': ['error'],
        'no-var': 'error',
        'no-unused-vars': ['error', {
            'varsIgnorePattern': '[iI]gnored',
            'caughtErrors': 'all'
        }],
        'indent': ['error', 4, {
            'MemberExpression': 0
        }],
        'multiline-ternary': ['error', 'always-multiline'],
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
            { 'blankLine': 'always', 'next': 'block-like', 'prev': '*' },
            { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
            { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] }
        ]
    }
}

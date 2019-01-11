module.exports = {
    extends: [
        'eslint-config-fagougou-base',
        './vue'
    ].map(require.resolve),
    rules: {}
}
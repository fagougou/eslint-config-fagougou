module.exports = {
    env: {
        browser: true
    },
    extends: [
        'eslint-config-fagougou-base',
        './vue'
    ].map(require.resolve)
}

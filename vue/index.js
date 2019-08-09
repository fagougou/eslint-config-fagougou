module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    plugins: [
        "vue"
    ],
    extends: [
        "plugin:vue/recommended"
    ],
    rules: {
        "vue/html-indent": [ "error", 2 ],
        "vue/html-closing-bracket-newline": [ "warn", {
            "singleline": "never",
            "multiline": "never"
        } ],
        "vue/attributes-order": [ "error", {
            "order": [
                "GLOBAL", // ex: 'id'
                "DEFINITION", // ex: 'is'
                "CONDITIONALS", // ex: 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
                "LIST_RENDERING", // ex: 'v-for item in items'
                "UNIQUE", // ex: 'ref', 'key', 'v-slot', 'slot'
                "RENDER_MODIFIERS", // ex: 'v-once', 'v-pre'
                "TWO_WAY_BINDING", // ex: 'v-model'
                "OTHER_DIRECTIVES", // ex: 'v-custom-directive'
                "CONTENT", // ex: 'v-text', 'v-html'
                "OTHER_ATTR", // ex: 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
                "EVENTS" // ex: '@click="functionCall"', 'v-on="event"'
            ]
        } ],
        "vue/return-in-computed-property": 0,
        "vue/max-attributes-per-line": [ "error", {
            "singleline": 1,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        } ],
        "vue/no-v-html": 0,
        "vue/script-indent": [ "error", 2, {
            "baseIndent": 0,
            "switchCase": 0,
            "ignores": []
        } ],
        "vue/html-quotes": 2,
        "vue/no-unused-components": 1,
        "vue/component-name-in-template-casing": [
            "error", "PascalCase", {
                "registeredComponentsOnly": true,
                "ignores": []
        } ]
    }
}


module.exports = {
  env: {
    browser: true,
    es2021: true
  },
    extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0
  }
}

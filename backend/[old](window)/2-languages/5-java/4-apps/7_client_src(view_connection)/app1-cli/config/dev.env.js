'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  [main_system_name]_UI_DOMAIN: '"http://localhost:8080/"',
  ERROR_500: '""',
  ERROR_401: '""',
  ERROR_403: '""',
  GO_JS_LICENSE_KEY: '"73f947e5ba6431b700ca0d2b113f69ed1bb37f3b9ed41bf1590041f5ef0d68403089ed70588389c5dafd1bfc1b7ac4ded4c46d2e9e4d016be263d1d845b184ade13477b2465d4487a3052fcbcefe2fa8a82f74a5c3e172a18978dfa6efa1c19a59bcf1811a995dbc2e7e07615e7dbd5ab1ae897df9509c4e797d9ba6f9e8b040e56f70"'
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "fs": false // Since fs is not needed in the browser, setting it to false is sufficient
      }
    }
  },
})

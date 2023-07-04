const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    port: 8080,
    open: true,
    https: false,
    host: "0.0.0.0",
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      changeOrigin: true,
      secure: false,
      target: "",
      pathRewrite: {
        "^/api": ""
      }
    }
  }
})

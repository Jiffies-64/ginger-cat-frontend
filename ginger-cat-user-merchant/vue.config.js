const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: process.env.VUE_APP_CLIENT_MANAGE_PORT,
    open: false,
    // disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER_API_URL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})

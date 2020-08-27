const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const webpack = require('webpack') // to access built-in plugins

module.exports = {
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/login': {
        target: 'http://10.130.203.17:8090',
        changeOrigin: true,
        pathRewrite: { // 如果需要重写接口地址，则需要配置该参数
          '^/login': '/login'
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  }
}

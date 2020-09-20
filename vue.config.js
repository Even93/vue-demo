const Timestamp = new Date().getTime(); //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const webpack = require('webpack') // to access built-in plugins

module.exports = {
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    port: 8088,
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
    ],
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    }
  }
}

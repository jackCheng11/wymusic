// const path = require("path")
const px2rem = require('postcss-px2rem')
module.exports = {
  publicPath: 'http://127.0.0.1:8300',
  devServer: {
    port: 8300,
    open: true
  },
  configureWebpack: {
    entry: '@/main.js'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}

// +（解决文件需重复引入）
const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //   publicPath: "./",
  //   //  构建时的输出目录
  //   outputDir: "dist",
  //   //  放置静态资源的目录
  //   assetsDir: "assets",
  //   //  html 的输出路径
  //   indexPath: "index.html",
  //   //文件名哈希
  //   filenameHashing: true,
  //   lintOnSave: true,
  //   //  是否使用带有浏览器内编译器的完整构建版本
  //   runtimeCompiler: false,
  //   //  babel-loader 默认会跳过 node_modules 依赖。
  //   // 配置 webpack-dev-server 行为。
  //   devServer: {
  //     open: process.platform === 'darwin',
  //     host: '0.0.0.0',
  //     port: 8081,
  //     https: false,
  //     hotOnly: false,
  //     // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
  //     proxy: {
  //       '/api': {
  //         target: "http://124.222.203.172.maker-iot.com", // 项目用到的域名
  //         changeOrigin: true,
  //         secure: false,
  //         pathRewrite: {
  //           "^/api": ""
  //         }
  //       },
  //       // '/foo': {
  //       //   target: '<other_url>'
  //       // }
  //     }
  //   },

  // 为解决以下两个文件需要重复引入的问题
  // 在此之前需要执行以下代码：vue add style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // __dirname绝对路径
        // +（解决文件需重复引入）
        path.join(__dirname, './src/assets/styles/variables.less'),
        // +（解决文件需重复引入）
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },

})

// //打包配置文件
//执行：npm run build



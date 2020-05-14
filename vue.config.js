
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
      // 设置主机地址
      // host: 'http://192.168.10.146',
      // 设置默认端口
    //   port: 8080,
    //   //默认打开浏览器
    // //   open: true,
    //   // 设置代理
    //   proxy: {
    //       '/api': {
    //           // 目标 API 地址
    //           target: 'http://127.0.0.1:8030',//真实的api地址
    //           secure: false,
    //           // 如果要代理 websockets
    //           // ws: true,
    //           // 将主机标头的原点更改为目标URL
    //           changeOrigin: true,
    //       }
    //   }
        before: require('./src/mock.js')
  },
  lintOnSave: false,   // 关闭代码验证
  // chainWebpack(config) {
  //   config.module
  //       .rule('svg')
  //       .exclude.add(resolve('src/assets/icons'))
  //       .end()
  //   config.module
  //       .rule('icons')
  //       .test(/\.svg$/)
  //       .include.add(resolve('src/assets/icons'))
  //       .end()
  //       .use('svg-sprite-loader')
  //       .loader('svg-sprite-loader')
  //       .options({
  //         symbolId: 'icon-[name]'
  //       })
  //       .end()
  // },
}
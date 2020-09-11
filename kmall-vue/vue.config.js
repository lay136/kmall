const path = require('path')

module.exports = {
  //服务端口配置
  devServer:{
    port:3003,
    // proxy: 'http://127.0.0.1:3000',
    proxy: 'https://api.mall.kuazhu.com',
  },
  //配置less文件
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/index.less')
      ]
    }
  },    
  //别名配置
  chainWebpack:config =>{
    config.resolve.alias
    .set('pages',path.resolve(__dirname,'./src/pages'))
    .set('api',path.resolve(__dirname,'./src/api'))
  }   
}
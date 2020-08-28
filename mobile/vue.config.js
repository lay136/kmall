const path = require('path')

module.exports = {
	// 服务端口
  	devServer: {
    	port:3003
  	},
  	// less文件配置
  	pluginOptions: {
    	'style-resources-loader': {
      		preProcessor: 'less',
      		patterns: [
      			path.resolve(__dirname, './src/assets/less/index.less')
      		]
    	}
  	},
  	//别名配置
  	chainWebpack:config => {
	    config.resolve.alias
		    .set('pages',path.resolve(__dirname,'./src/pages'))
		    .set('api',path.resolve(__dirname,'./src/api'))
  	} 
}
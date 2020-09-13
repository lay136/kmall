<<<<<<< HEAD
const path = require('path')

module.exports = {
	devServer:{
		port:3003,
		proxy: 'https://api.mall.kuazhu.com/',
=======
const path = require('path')

module.exports = {
	devServer:{
		port:3003,
		proxy: 'https://api.mall.kuazhu.com/',
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, './src/assets/less/index.less')
			]
		}
<<<<<<< HEAD
	},
	chainWebpack:config =>{
	    config.resolve.alias
	    .set('pages',path.resolve(__dirname,'./src/pages'))
	    .set('api',path.resolve(__dirname,'./src/api'))
	    .set('components',path.resolve(__dirname,'./src/components'))
=======
	},
	chainWebpack:config =>{
	    config.resolve.alias
	    .set('pages',path.resolve(__dirname,'./src/pages'))
	    .set('api',path.resolve(__dirname,'./src/api'))
	    .set('components',path.resolve(__dirname,'./src/components'))
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
	} 
}
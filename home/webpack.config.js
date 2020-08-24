const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//输出配置文s件封装成一个函数
const getHtmlConfig = (name,title)=>({
    template:'./src/views/'+name+'.html',//模板文件
    filename:name+'.html',//输出的文件名
    title:title,
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:['common',name]
})


module.exports = {
    //指定环境
    mode:'development',
    // mode:'production',
    //单一入口
    // entry: './src/index.js',
    // entry: {main:'./src/index.js'},
    //多入口
    entry:{
        // index:'./src/index.js',
        // common:'./src/common.js',
        'common'                :'./src/pages/common/index.js',
        'index'                 :'./src/pages/index/index.js',
        'list'                  :'./src/pages/list/index.js',
        'user-login'            :'./src/pages/user-login/index.js',
        'user-register'         :'./src/pages/user-register/index.js',
        'result'                :'./src/pages/result/index.js',
        'user-center'           :'./src/pages/user-center/index.js',
        'user-update-password'  :'./src/pages/user-update-password/index.js',
        'detail'                :'./src/pages/detail/index.js',
        'cart'                  :'./src/pages/cart/index.js',
        'order-confirm'         :'./src/pages/order-confirm/index.js',
        'payment'               :'./src/pages/payment/index.js',
        'order-list'            :'./src/pages/order-list/index.js',
        'order-detail'          :'./src/pages/order-detail/index.js',


    },
    //指定出口文件
    output: {
        //「入口分块(entry chunk)」的文件名模板
        // filename: '[name]-[chunkhash]-bundle.js',
        filename: 'js/[name]-[hash]-bundle.js',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist'),
        //指定输出参考根路径
        publicPath:'/'

    },
    //配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            util:path.resolve(__dirname,'./src/util'),
            api:path.resolve(__dirname,'./src/api'),
            node_modules:path.resolve(__dirname,'./node_modules'),
        }
    },    
    module: {
        rules: [
            //处理css文件
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    },
                        "css-loader"
                    ]
            },
            //处理图片
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff2|woff)\??.*$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //babel
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env', 'react'],
                        presets: ['env','es2015','stage-3'],
                    },
                }
            },
            //配饰tpl
            {
                test:/\.tpl$/,
                use: {
                    loader: 'html-loader',
                }
            }, 
        ]
    },
    plugins:[
        //自动生成HTML
        new htmlWebpackPlugin(getHtmlConfig('index','KMALL 首页')),
        new htmlWebpackPlugin(getHtmlConfig('list','KMALL 列表页')),
        new htmlWebpackPlugin(getHtmlConfig('user-login','用户登录页')),
        new htmlWebpackPlugin(getHtmlConfig('user-register','用户注册')),
        new htmlWebpackPlugin(getHtmlConfig('result','结果提示页')), 
        new htmlWebpackPlugin(getHtmlConfig('user-center','个人中心')),
        new htmlWebpackPlugin(getHtmlConfig('user-update-password','修改密码')),
        new htmlWebpackPlugin(getHtmlConfig('detail','商品详情页')), 
        new htmlWebpackPlugin(getHtmlConfig('cart','购物车')), 
        new htmlWebpackPlugin(getHtmlConfig('order-confirm','订单详情')),
        new htmlWebpackPlugin(getHtmlConfig('payment','订单支付')),        
        new htmlWebpackPlugin(getHtmlConfig('order-list','订单列表')),        
        new htmlWebpackPlugin(getHtmlConfig('order-detail','订单详情')),        
               


        //自动清理dist目录
        new CleanWebpackPlugin(),

        //单独打包CSS资源
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash]-bundle.css'
        })
    ],
    devServer: {
        contentBase: './dist',//内容的目录
        port:3002,//指定服务端口
        // historyApiFallback:true//让h5路由不向后端发送请求
        proxy: [{
            context: [
            //请求地址是以context内部的值开头的路由全部代理到target上
                '/sessions',
                '/users',
                '/categories',
                '/ads',
                '/floors',
                '/products',
                '/carts',
                '/orders',
                '/shippings',
                '/payments'
                
            ],
            target: 'http://127.0.0.1:3000',
        }]
    },                
}



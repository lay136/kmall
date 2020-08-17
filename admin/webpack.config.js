const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //指定环境
    mode:'development',
    // mode:'production',
    //单一入口
    // entry: './src/index.js',
    // entry: {main:'./src/index.js'},
    //多入口
    entry:{
        index:'./src/index.js',
    },
    //出口
    output: {
        //「入口分块(entry chunk)」的文件名模板
        // filename: '[name]-[chunkhash]-bundle.js',
        filename: '[name]-[hash]-bundle.js',
        //指定输出参考根路径
        publicPath:'/',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    },
    //配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            util:path.resolve(__dirname,'./src/util'),
            common:path.resolve(__dirname,'./src/common'),
            api:path.resolve(__dirname,'./src/api'),
            // node_modules:path.resolve(__dirname,'./src/node_modules'),
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
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 400
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
                        presets: ['env','es2015','react','stage-3'],
                        plugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }] ]
                    },
                }
            },
            //自定义主题
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        modifyVars: {
                            'primary-color': '#fb7605',//可以更换主题颜色
                            // 'primary-color': '#1DA57A',//可以更换主题颜色
                            'success-color': '#52c41a', // 成功色
                            'warning-color': '#faad14',
                            'error-color': '#f5222d',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                    },
                }],
            }            
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',//模板文件
            filename:'index.html',//输出的文件名
            //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
            hash:true,//给生成的js/css文件添加一个唯一的hash
        }),
        new MiniCssExtractPlugin({})
    ],
    devServer: {
        contentBase: './dist',//内容的目录
        port:3001,//指定服务端口
        historyApiFallback:true//让h5路由不向后端发送请求
    },                
}



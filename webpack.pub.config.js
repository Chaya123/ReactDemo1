const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //打包时每次删除dist文件

module.exports = {
    entry: {
        app: path.join(__dirname,'./src/main.js'),  //入口文件
        vendors:['jquery']  //把要抽离的三方包放到该数组中
    },      
    output: {
        path: path.join(__dirname,'./dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
        ]
    }
}
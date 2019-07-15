const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //打包时每次删除dist文件
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: {
        app: path.join(__dirname,'./src/main.js'),  //入口文件
        vendors:['jquery']  //把要抽离的三方包放到该数组中
    },      
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,//合并多余空格
                removeComments: true,  //移除注释
                removeAttributeQuotes: true //移除属性上的双引号
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin ({
            filename: 'css/[name].css'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // runtimeChunk: true,
        splitChunks: {
            chunks: "async",
            minSize: 1000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test:/\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10,
                    enforce:true,
                }
            },
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: [
                {loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
                },
                'css-loader'
            ]},
            { test: /\.scss$/, use: [
                    {loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",'sass-loader'
                ]
            },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]'},
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
        ]
    }
}
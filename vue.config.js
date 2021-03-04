const path = require('path');
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        overlay: {
            warnings: false,
            errors: true
        },
        // proxy: {
        //     [process.env.VUE_APP_SERVER_URL]: {
        //         target: "http://localhost:9090/moku",
        //         changeOrigin: true,
        //         ws: false,
        //         pathRewrite: {
        //             ["^" + process.env.VUE_APP_SERVER_URL]: ""
        //         }
        //     }
        // }
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@': path.resolve(__dirname, './src'),
    //             '@i': path.resolve(__dirname, './src/assets'),
    //         }
    //     },
    //     plugins: [
    //         // Ignore all locale files of moment.js
    //         new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //
    //         // 配置compression-webpack-plugin压缩
    //         new CompressionWebpackPlugin({
    //             algorithm: 'gzip',
    //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //             threshold: 10240,
    //             minRatio: 0.8
    //         }),
    //         new webpack.optimize.LimitChunkCountPlugin({
    //             maxChunks: 5,
    //             minChunkSize: 100
    //         })
    //     ]
    // }
    configureWebpack: config => {
        config.module.rules.push({
                // 处理markdown文件
                test: /\.md$/,
                loader: 'text-loader'
            }
        );
    }
}

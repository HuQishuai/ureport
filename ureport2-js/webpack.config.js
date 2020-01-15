/**
 * Created by Jacky.Gao on 2018-04-15.
 * Base on Webpack4
 */
const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        designer: ['babel-polyfill','./src/index.js'],
        searchform: ['babel-polyfill','./src/form/index.js'],
        preview: ['babel-polyfill','./src/preview.js']
    },
    output: {
        path: path.resolve('../ureport2-console/src/main/resources/ureport-asserts/js'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // 抽离第三方插件
                    test: /handsontable|codemirror|chart.js/,
                    chunks: 'initial',
                    name: 'common',
                    priority: 10
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }]

            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000000
                        }
                    }
                ]
            }
        ]
    }
};
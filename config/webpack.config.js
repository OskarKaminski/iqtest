const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8090',
        'webpack/hot/only-dev-server',
        path.resolve('./app/main.jsx'),
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve('./dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            C: path.resolve('./app/Components'),
            Actions: path.resolve('./app/Actions/actions'),
            API: path.resolve('./app/API/api'),
            Common: path.resolve('./app/common')
        },
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [{loader: 'babel-loader'}],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: ['./src/styles'],
                        }},
                ],
            },
            {
                test: /\.html/,
                use: [{loader: 'html-loader'}],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            progressive: true,
                        },
                    },
                ],
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'file-loader'}],
            },
            {
                test: /\.json$/,
                use: [{loader: 'json-loader'}],
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                        },
                    },
                ],
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                        },
                    },
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
        port: 8090,
        quiet: true,
        historyApiFallback: true,
        inline: true,
        disableHostCheck: true,
        host: '0.0.0.0'
    }
};

module.exports = config;

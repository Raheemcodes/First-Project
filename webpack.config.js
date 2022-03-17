const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        signup: './src/signup.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: './dist',
        // host: '172.20.10.2',
        port: 1000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: './src/signup.html',
            chunks: ['signup']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html',
            chunks: ['login']
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

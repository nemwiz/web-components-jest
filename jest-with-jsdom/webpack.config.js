const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'lit-html':'./node_modules/lit-html/lit-html.js',
        'lit-element':'./node_modules/lit-element/lit-element.js',
    },
    module: {
        rules: [    
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: '[name].js',
        libraryTarget:'commonjs',
        path: path.resolve(__dirname, 'dist'),
    },
};

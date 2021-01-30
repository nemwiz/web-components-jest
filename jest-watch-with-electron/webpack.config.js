const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.ts',
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
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'slider.js'
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};
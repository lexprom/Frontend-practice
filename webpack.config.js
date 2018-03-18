const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './js-test-task/app.js',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test : /\.sass$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : ['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins:[new ExtractTextPlugin('style.css')]
};
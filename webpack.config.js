const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [{
           loader: 'babel-loader',
           test: /\.js$/,
           exclude: /node_modules/
       },
       {
           test: /\.less$/,
           use: [
               'style-loader',
               'css-loader',
               'less-loader'
           ]
       },
       {
        test: /\.css/,
        use: [
            'style-loader',
            'css-loader'
        ]
    }
    ] 
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
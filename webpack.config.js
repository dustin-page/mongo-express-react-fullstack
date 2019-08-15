const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'inline-cheap-module-source-map',
    entry: path.resolve(__dirname,'src','app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/, //test determines if a file should be compiled. the regex processes js and jsx files; ? mark makes the x optional
            loader: 'babel-loader'
        }]
    }
}
const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'inline-cheap-module-source-map',
    entry: path.resolve(__dirname, 'src', 'app'),
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
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
        },
        {
            test: /\.(css|scss)$/,
            use: [
                {
                    //Loads the CSS into a style tag in the DOM 
                    //TODO: Implement the "mini-css-extract-plugin" in order to extract the CSS into an external file in production
                    loader: 'style-loader'
                },
                {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        },
                        sourceMap: true
                    }
                },
                {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    }
}
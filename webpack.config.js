const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin  = require('html-webpack-plugin');

module.exports = (env, argv) => {

    const isDevelopment = argv.mode !== 'production';

    const pluginDefaults = [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/app/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "../style/[name].css"
        })
    ];

    console.log("Environment mode", argv.mode);
    console.log("isDevelopment", isDevelopment);

    return {
        mode: isDevelopment ? 'development' : 'production',
        devtool: 'inline-cheap-module-source-map',
        entry: path.resolve(__dirname, 'src', 'app'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDevelopment ? '[name].js' : '[name].[hash].js',
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
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: !isDevelopment }
                    }
                ]
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    //style-loader loads the CSS into a style tag in the DOM 
                    //fallback to style-loader in development
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        },
        plugins: [...pluginDefaults]
    }
}
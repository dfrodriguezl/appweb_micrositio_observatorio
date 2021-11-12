const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

 

  devtool: "source-map",
  // Path to your entry point. From this file Webpack will begin his work
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true,
    
  },
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        resolve: {
          extensions:['.js','.jsx']
        }

      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
              options: {
                  limit: 1000,
                  name : '[name].[ext]'
              }
          }
      ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      append: false,
      chunks: ["index"]
    }),
    
    /*
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', //para que lo haga sólo al momento de hacer el build
      openAnalyzer: true, //para que nos muestre el resultado inmediatamente
    }),
    */

    //new CompressionPlugin()
    
  ],

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};
var path = require('path');  
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {  
  devtool: 'cheap-eval-source-map',
  entry:[    
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './modules/2_colors/colors.js'
    ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
    ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.css$/,loader: 'style-loader!css-loader!postcss-loader'}
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
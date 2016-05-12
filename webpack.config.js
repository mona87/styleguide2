var path = require('path');  
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {  
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'modules/2_colors/colors.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
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
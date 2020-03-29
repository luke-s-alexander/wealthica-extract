const path = require('path');
import merge from 'webpack-merge';
import ChunkRenamePlugin from 'chunk-rename-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';


const include = path.join(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },
  mode: 'none',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include }
    ]
  }
};
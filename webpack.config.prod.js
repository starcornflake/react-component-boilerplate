const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js']
  },
  entry: [
    'babel-polyfill',
    './example/client'
  ],
  output: {
    path: path.resolve('./public/dist/'),
    publicPath: '/public/dist/',
    filename: 'bundle.min.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].min.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'example'),
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'])
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  }
}

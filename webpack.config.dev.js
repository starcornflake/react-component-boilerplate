const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './example/client'
  ],
  output: {
    path: path.resolve('./public/dist/'),
    publicPath: '/public/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
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
        ],
        query: {
          presets: ["react-hmre"]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  }
}

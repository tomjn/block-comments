const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './js/main.js',
  output: {
    filename: 'built.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + '/src'
      },
      {
        test: /\.styl$/,
        loader: stylusLoader
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};

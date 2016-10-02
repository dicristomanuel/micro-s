var ExtractTextPlugin = require('extract-text-webpack-plugin');
var styleLoader = ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]');

module.exports = {
  entry:  './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: styleLoader,
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};

var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var cssLoaderFile = ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]');

module.exports = {
  entry: './src',
  // entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("css"),
        include: __dirname + '/src'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};


// var stylusLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader');
// {
//   test: /\.styl$/,
//   loader: stylusLoader
// }

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
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]--[hash:base64:5]!stylus-loader',
        include: __dirname + '/src'
      }
    ],
  }
};

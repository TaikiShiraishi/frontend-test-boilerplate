module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].bundle.js'
  }
};

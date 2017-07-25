module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-espower']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
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

const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "/client/dist"),
  },
  devServer: {
    static: path.resolve(__dirname, '/client/dist'),
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  mode: 'development',
  //devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    //compress: true,
    host: 'localhost',
    port: 3333,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './public/index.html'),
      favicon: path.join(__dirname, './public/favicon.ico'),
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'ts-loader',
        resolve: {
          extensions: ['.ts', '.js'],
        },
      },
    ]
  }
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: '/app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svelte$/,
        use: {
            loader: 'svelte-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: 'file-loader',
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.mjs', '.svelte'],
  },
  plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, 'src/template.html'),
            // inject: false,
            title: 'Impact',
        }),
        new MiniCssExtractPlugin(),
        new Dotenv(),
    ],
}

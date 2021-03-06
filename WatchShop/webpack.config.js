const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/files'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
  },
};


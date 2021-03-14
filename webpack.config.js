const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),

  entry: './main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]'
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      inject: 'body'
    }),
    new miniCss({filename: "styles/style.css"})
  ],

  devServer: {
    contentBase: __dirname + '/dist',
    port: 8080
  }
}
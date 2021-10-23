const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.pug$/i,
        loader: 'pug-loader',
        options: { pretty: true }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader', options: { sourceMap: true} }
        ]
      },
      {
        test: /\.(ttf|eot|otf|woff2?)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][ext]' }
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/images/[name][ext]' }
      },
      {
        test: /\.(mp4)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/videos/[name][ext]' }
      },
      {
        test: /\.(mp3)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/media/[name][ext]' }
      },
      {
        test: /\.(docx?|xlsx?|pptx?|pdf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/docs/[name][ext]' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/main.css'
    })
  ]
};

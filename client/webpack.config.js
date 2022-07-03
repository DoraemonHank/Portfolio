const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {

  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash].js',
    publicPath: '/'
  },

  // 模式
  mode: 'development',
  // mode : 'production', // tree shaking mode一定要使用production,才會精簡

  // Loader
  module: {
    rules: [
      {
        test: /\.css$|\.scss$/i,
        // use: ["style-loader", "css-loader"],
        use: [
          MiniCssExtractPlugin.loader, // 抽離css
          // 'css-loader'
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 // ->給sass的import看的
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }

        ]
      },

      // Asset Module
      {
        test: /\.(jpg|png|gif|svg|bmp)/,
        type: 'asset/resource'
      },

      // Babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          // options: {
          //  presets: ['@babel/preset-env']
          // }
        }
      }

    ]

  },
  devServer: {
    historyApiFallback: true
  },
  // 插件
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  }),

  // 抽離css
  new MiniCssExtractPlugin({ filename: 'index.[hash].css' }),

  // 自動刪除 dist (clean-webpack-plugin)
  new CleanWebpackPlugin(),

  // copy-webpack-plugin
  new CopyPlugin({
    patterns: [
      { from: './public/locales', to: './locales' },
      { from: './public/_redirects', to: './' },
      { from: './font', to: './font' }
      // { from: "other", to: "public" },
    ]
  }),

  // DefinePlugin
  // new webpack.DefinePlugin({
  //   // Definitions...
  //   PRODUCTION: JSON.stringify(true),
  // }),

  // 壓縮 compression-webpack-plugin
  // 把每個檔案都壓縮成.gz
  new CompressionPlugin()

  ],

  devtool: 'source-map'
}

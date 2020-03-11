import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: path.resolve(process.cwd(), 'src', 'index.js'),
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'js/bundle-[hash:8].js'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin({
      path: '/public'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    contentBase: path.resolve(process.cwd()),
    port: 4001,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:9090',
        secure: false,
        changeOrigin: true
      }
    }
  }
}

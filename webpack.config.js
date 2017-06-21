const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./lib/js/roadtrip.js",
  output: {
    path: path.join(__dirname, 'lib', 'js'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', "*"]
    // alias: {'vue$', 'vue/dist/vue.js'}
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '../stylesheets/css/main.css', allChunks: true })
  ],
  devtool: 'source-map',
};

const path = require('path'); // libreria
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
devServer: {
    static: './dist',
  },
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.js'
},

module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
mode: 'development'}
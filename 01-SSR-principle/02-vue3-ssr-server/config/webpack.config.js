const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/server.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.vue', '...'],
  },
  externals: [nodeExternals()] // remove node_modules file
}

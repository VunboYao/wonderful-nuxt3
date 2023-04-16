const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: './server.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, './build')
  },
  externals: [nodeExternals()]
}

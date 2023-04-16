const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: 'development',
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
  plugins: [new VueLoaderPlugin(),],
  resolve: {
    extensions: ['...', '.vue']
  }
}

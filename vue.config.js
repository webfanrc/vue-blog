const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: '/data/www',
  assetsDir: './',
  devServer: {
    port: 8081,
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
};

const webpack = require('webpack');
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const EslintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const commonConfig = require('./webpack.common');
const paths = require('./paths');

const developmentConfig = {
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    hot: true,
    open: true,
    static: {
      publicPath: paths.publicPath,
    },
    port: paths.PORT,
    // use a rewrite for our 404 page to simulate express logic
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/404.html' }],
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StylelintPlugin(),
    new EslintPlugin({ extensions: ['js', 'ts'] }),
  ],
};

module.exports = extendWebpackBaseConfig(commonConfig, developmentConfig);

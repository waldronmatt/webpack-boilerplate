// eslint-disable-next-line unicorn/prevent-abbreviations
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
    // use a rewrite for our 404 page to simulate express logic
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/404.html' }],
    },
    hot: true,
    open: true,
    port: paths.PORT,
    static: {
      directory: paths.src,
      publicPath: paths.publicPath,
      watch: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StylelintPlugin({
      exclude: ['coverage/**'],
    }),
    new EslintPlugin({
      extensions: ['js', 'ts'],
      exclude: ['coverage/**'],
    }),
  ],
};

module.exports = extendWebpackBaseConfig(commonConfig, developmentConfig);

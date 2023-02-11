// eslint-disable-next-line unicorn/prevent-abbreviations
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('node:zlib');
const CopyPlugin = require('copy-webpack-plugin');
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common');
const paths = require('./paths');

const productionConfig = {
  plugins: [
    new ESBuildMinifyPlugin({
      target: 'es2015',
      css: true,
    }),
    new ImageMinimizerPlugin({
      test: /\.(apng|avif|gif|jpe?g|png|svg|webp)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [['jpegtran', { progressive: true }]],
        },
      },
      generator: [
        {
          preset: 'webp',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ['imagemin-webp'],
          },
        },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      test: /\.(js|css|html)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    }),
    new CopyPlugin({
      patterns: [{ from: paths.public, to: paths.dist }],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
        common: {
          name: 'commons',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);

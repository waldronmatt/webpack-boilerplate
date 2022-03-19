const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common');

const productionConfig = {
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|apng|avif|gif|jpe?g|png|svg|webp)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      // threshold: 8192, // only assets bigger than this size are processed
      // minRatio: 0.8, // process if Compressed Size / Original Size < minRatio
    }),
  ],
  optimization: {
    splitChunks: {
      // tells SplitChunksPlugin to create chunks based on some conditions
      cacheGroups: {
        vendor: {
          name: 'vendors',
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
          // Prioritize vendor chuncks over commons
          priority: 20,
        },
        common: {
          name: 'commons',
          // minimum number of chunks that must share a module before splitting
          minChunks: 2,
          chunks: 'all',
          // lower priority than vendors
          priority: 10,
          /*
            If the current chunk contains modules already split out from the
            main bundle, it will be reused instead of a new one being generated.
          */
          reuseExistingChunk: true,
          /*
            Enforce value is set to true to force SplitChunksPlugin to
            form this chunk irrespective of the size of the chunk
          */
          enforce: true,
        },
      },
    },
  },
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);

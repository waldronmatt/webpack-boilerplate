const { merge } = require('webpack-merge');
const { baseParts } = require('@waldronmatt/webpack-config');
const paths = require('./paths');
const parts = require('./webpack.parts');

const commonConfig = isProduction => {
  // pass `isProduction` environment variable into your parts file
  parts(isProduction);

  return merge([
    {
      entry: {
        main: [`${paths.src}/ts/index.ts`],
      },
      output: {
        path: paths.build,
        publicPath: paths.publicPath,
      },
      resolve: {
        modules: [paths.src, 'node_modules'],
        alias: {
          '@': paths.src,
        },
      },
    },
    baseParts.loadTS(),
    baseParts.loadSCSS(),
    baseParts.loadFonts({ path: 'fonts/' }),
    parts.loadPages(),
  ]);
};

module.exports = commonConfig;

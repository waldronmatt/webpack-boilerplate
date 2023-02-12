const nodeExternals = require('webpack-node-externals');

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = env => {
  return {
    mode: 'production',
    entry: {
      server: env.target === 'serverless' ? './serverless.js' : './bin/www',
    },
    target: 'node',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
  };
};

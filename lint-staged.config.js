const config = require('@waldronmatt/lint-staged-config');

module.exports = {
  ...config,
  '*.{js,jsx,ts,tsx}': [
    'yarn test --bail --passWithNoTests --findRelatedTests',
  ],
  '*': ['secretlint'],
};

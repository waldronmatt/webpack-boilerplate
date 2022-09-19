const config = require('@waldronmatt/lint-staged-config');
const ymlConfig = require('@waldronmatt/lint-staged-config');

module.exports = {
  '*': ['secretlint'],
  '!(*.{md,js,jsx,ts,tsx,json,css,scss,yml,yaml})': [
    'prettier --cache --write --ignore-unknown',
  ],
  ...ymlConfig,
  ...config,
  '*.{js,jsx,ts,tsx}': [
    'yarn test --bail --passWithNoTests --findRelatedTests',
  ],
};

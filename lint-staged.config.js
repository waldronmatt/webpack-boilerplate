/* eslint-disable sonarjs/no-duplicate-string */
const config = require('@waldronmatt/lint-staged-config');
const ymlConfig = require('@waldronmatt/lint-staged-config/yml');

module.exports = {
  // check for credentials
  '*': ['secretlint'],
  // ignore prettier on unknown extensions
  '!(*.{md,js,jsx,ts,tsx,json,css,scss,yml,yaml})': [
    'prettier --cache --write --ignore-unknown',
  ],
  ...ymlConfig,
  ...config,
  // lint and fix changed markdown files
  '*.md': ['prettier --cache --write', 'markdownlint'],
  // lint and fix changed json files
  '*.json': ['prettier --cache --write'],
  // lint and fix changed css and scss files
  '*.{css,scss}': ['prettier --cache --write', 'stylelint --cache --fix'],
  // execute tests related to files changed in the current commit only
  '*.{js,jsx,ts,tsx}': [
    'yarn test --bail --passWithNoTests --findRelatedTests --coverage',
  ],
};

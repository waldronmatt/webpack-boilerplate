const config = require('@waldronmatt/lint-staged-config');

module.exports = {
  ...config,
  '*.{ts,js}?x': ['yarn test --bail --passWithNoTests --findRelatedTests'],
};

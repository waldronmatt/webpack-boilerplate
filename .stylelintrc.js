module.exports = {
  ignoreFiles: ['dist/**', 'coverage/**'],
  extends: '@waldronmatt/stylelint-config/scss',
  overrides: [
    {
      files: ['**/*.css'],
      extends: '@waldronmatt/stylelint-config',
    },
  ],
};

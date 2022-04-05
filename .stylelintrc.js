module.exports = {
  ignoreFiles: ['dist/**'],
  extends: '@waldronmatt/stylelint-config/scss',
  overrides: [
    {
      files: ['**/*.css'],
      extends: '@waldronmatt/stylelint-config',
    },
  ],
};

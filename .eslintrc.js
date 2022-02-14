// https://stackoverflow.com/a/64488474
module.exports = {
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['@waldronmatt/eslint-config/ts'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.js'],
      extends: ['@waldronmatt/eslint-config'],
    },
  ],
};

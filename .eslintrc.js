module.exports = {
  ignorePatterns: ['dist/**', 'public/sw.js', 'coverage/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        '@waldronmatt/eslint-config/ts',
        '@waldronmatt/eslint-config/jest',
      ],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.js'],
      extends: [
        '@waldronmatt/eslint-config',
        '@waldronmatt/eslint-config/jest',
      ],
    },
  ],
};

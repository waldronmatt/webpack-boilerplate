module.exports = {
  preset: '@waldronmatt/jest-config',
  testMatch: [
    // other common folder naming conventions
    // __mocks__ , __fixtures__ , __snapshots__
    '<rootDir>/__tests__/**/**.+(ts|tsx|js|jsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
  moduleNameMapper: {
    /*
      method for stubbing Webpack resource queries
      https://github.com/visualfanatic/vue-svg-loader/issues/73#issuecomment-478295746

      should match any file extension containing any '?' resource
      queries with '@' webpack alias
    */
    '^@/(.*.)(\\?(.*))$': '<rootDir>/src/$1',
    // resolve '@' Webpack alias
    // https://stackoverflow.com/a/65578141
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // ignore transformations and coverages against node_modules
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
};

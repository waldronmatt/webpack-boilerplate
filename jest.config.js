module.exports = {
  preset: '@waldronmatt/jest-config',
  testMatch: [
    '<rootDir>/__tests__/**/**.+(ts|tsx|js|jsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
};

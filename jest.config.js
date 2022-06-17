module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.tsx',
    '<rootDir>/src/view/**/*.tsx',
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
  },
  transformIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};

export default {
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.ts(x)?'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
  },
  transformIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};

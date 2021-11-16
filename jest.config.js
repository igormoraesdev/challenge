module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['<rootDir>/src/main/config/jest/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/main/config/jest/assetsTransformer.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@react-native-vector-icons|react-navigation-shared-element)',
  ],
  testPathIgnorePatterns: ['<rootDir>/__tests__/data/mocks'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '.module.ts',
    '<rootDir>/src/app/main.ts',
    '<rootDir>/__tests__/data/mocks',
  ],
};

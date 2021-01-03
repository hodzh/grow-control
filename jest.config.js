module.export = {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/jest-setup.ts"
  ],
  "collectCoverageFrom": [
    "src/app/**/*.ts"
  ],
  "testMatch": [
    "src/**/?(*.)+(spec).[jt]s?(x)"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/**",
    "<rootDir>/cordova/**"
  ],
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/**",
    "<rootDir>/cordova/**"
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: '<rootDir>/src/tsconfig.spec.json',
    },
  },
  roots: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1',
  },
};

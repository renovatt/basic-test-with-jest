// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/@types/**/*',
    '!src/pages/**/*',
    '!src/constants/**/*',
    '!src/styles/**/*',
    '!src/**/*.stories.tsx',
    '!src/**/styles.ts',
    '!src/**/types.ts',

    // 'src/**/*.{ts,tsx}',
    // '!src/**/index.ts',
    // '!src/**/*.stories.{ts,tsx}',
    // '!src/utils/**',
    // '!src/**/mock.{ts,tsx}',
    // '!src/middleware.ts',
    // '!src/@types/**',
    // '!src/constants/**',
    // '!src/pages/**',
    // '!src/app/**',
    // '!src/providers/**',
    // '!src/styles/**',
    // '!src/scripts/**',
    // '!src/types/**',
    // '!src/models/**',
    // '!src/**/types.ts',
    // '!src/**/styles.ts',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}',
  ],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'react-toastify',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(config)

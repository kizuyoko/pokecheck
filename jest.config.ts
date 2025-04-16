import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default createJestConfig(customJestConfig);

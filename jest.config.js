/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  globalSetup: '<rootDir>/test/setup-environment.ts',
  testEnvironment: 'node',
  silent: false,
  setupFiles: ['dotenv/config'],
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  modulePaths: ['./', './dist'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  setupFiles: ['./dist/main.js'],
  // transformIgnorePatterns: [
  //   '/node_modules/(?!(lit-element))'
  // ]
};

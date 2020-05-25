module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom-sixteen',
    setupFiles: ['./dist/main.js']
};

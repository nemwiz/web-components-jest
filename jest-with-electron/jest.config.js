module.exports = {
    preset: 'ts-jest',
    // runner: '@jest-runner/electron',
    // testEnvironment: '@jest-runner/electron/environment',
    runner: 'jest-electron/runner',
    testEnvironment: 'jest-electron/environment',
    modulePaths: ['./', './dist'],
    setupFiles: ['./dist/main.js'],
    testMatch: ['**/*.spec.ts'],

    // transformIgnorePatterns: [
    //     '/node_modules/(?!(lit-element))'
    //     '/node_modules/(?!(lit-element))',
    //     // '/node_modules/(?!(lit-html))',
    // ]
};

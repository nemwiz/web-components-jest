module.exports = {
    preset: 'ts-jest',
    runner: 'jest-electron/runner',
    testEnvironment: 'jest-electron/environment',
    moduleNameMapper: {
        "lit-html": "./dist/lit-html.js",
        "lit-element": "./dist/lit-element.js",
    }
};

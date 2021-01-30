module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!lit-element|lit-html).+\\.js$"
    ],
    runner: 'jest-electron/runner',
    testEnvironment: 'jest-electron/environment',
};

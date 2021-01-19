module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom-sixteen",
    moduleNameMapper: {
        "lit-html": "./dist/lit-html.js",
        "lit-element": "./dist/lit-element.js",
    }
};

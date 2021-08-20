"use strict";
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transformIgnorePatterns: ["<rootDir>/src/", "<rootDir>/node_modules/", "<rootDir>/src/tests"]
};

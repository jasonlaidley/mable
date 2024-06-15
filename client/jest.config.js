module.exports = {
    // preset: 'ts-jest',
    // testEnvironment: 'node',
    // transform: {
    //   '^.+\\.ts?$': 'ts-jest',
    // },
    // transformIgnorePatterns: ['<rootDir>/node_modules/'],
    // moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    
    // roots: ['<rootDir>'],
    // transform: {
    //   '^.+\\.ts?$': 'ts-jest'
    // },
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    // moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // collectCoverage: true,
    // clearMocks: true,
    // coverageDirectory: "coverage",

    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    testEnvironment: 'jsdom',
};
  
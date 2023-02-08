const path = require('path');

module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['./setup-jest.js'],
	moduleDirectories: [
		'node_modules',
		path.resolve(__dirname, './src/test-utils'),
	],
};

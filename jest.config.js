module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/tests/**',
    '!**/stories/**',
    '!**/lib/**',
    '!**/coverage/**',
    '!**/vendor/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/',
    'babel.config.js',
    'gulpfile.js',
    'jest-puppeteer.config.js',
    'jest-storyshots.config.js',
    'jest.config-visual.js',
    'jest.config.js',
    'jest-puppeteer.config.js',
    'postcss.config.js',
    'vue.config.js',
    'src/index.js',
    'lib-check.js',
    'make-template.js',
  ],

  coverageReporters: ['html', 'text-summary', 'cobertura'], // "text", "lcov", "json", "clover"],
}

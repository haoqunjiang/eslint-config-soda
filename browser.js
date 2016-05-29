module.exports = {
  extends: [
    './rules/esnext.js',

    './rules/best-practices.js',
    './rules/complexity.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js',

      // must be placed after esnext in order to override some of its rules
    './rules/browser.js',
  ],
}

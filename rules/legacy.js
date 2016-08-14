// For ES5- environments
module.exports = {
  rules: {
    // Disallow trailing commas, which will raise errors in IE8-
    'comma-dangle': ['error', 'never'],

    // Disable es6 rules that conflict with legacy environments
    'no-var': 'off',
    'prefer-const': 'off',
    'prefer-spread': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-template': 'off',
  },
}

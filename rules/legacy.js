// For ES5- environments
module.exports = {
    rules: {
        // Disable es6 rules that conflict with legacy environments
        'no-var': 'off',
        'prefer-const': 'off',
        'prefer-spread': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off'
    }
}

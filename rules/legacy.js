// for ES5- environments
module.exports = {
    rules: {
        // disable es6 rules that conflict with legacy environments
        'no-var': 0,
        'prefer-const': 0,
        'prefer-spread': 0,
        'prefer-arrow-callback': 0,
        'prefer-template': 0
    }
}

module.exports = {
    parser: 'babel-eslint',  // seems eslint can't process this setting when it's in a subpath
    plugins: [
        'react'
    ],
    ecmaFeatures: {
        jsx: true
    },
    rules: {
        // Use double quotes in JSX attributes, unless there're already double quotes in it
        // This is for consistency with HTML attributes
        'jsx-quotes': [1, 'prefer-double'],

        // Since we'll use ES6 Class syntax, display-name is now redundant
        'react/display-name': 0,

        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': 1,

        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': 1,

        // Disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': [1, 'never', { allowMultiline: false }],

        // Enforce props indentation to be 4 spaces
        'react/jsx-indent-props': [1, 4],   // eslint-disable-line no-magic-numbers

        // The maximum of props on a single line is 2
        'react/jsx-max-props-per-line': [1, { maximum: 2 }],

        // Disallow duplicate props in a JSX element
        'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],

        // If enabled, all literal strings appeared in a JSX element would
        // need to be wrapped in a JSX container (`{'TEXT'}`), which, IMO, is not necessary.
        'react/jsx-no-literals': 0,

        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 1,

        // Enforce propTypes declarations alphabetical sorting
        'react/jsx-sort-prop-types': 1,

        // Enforce props alphabetical sorting
        'react/jsx-sort-props': 1,

        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 1,

        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 1,

        // Prevent usage of dangerous JSX properties
        // see: https://facebook.github.io/react/tips/dangerously-set-inner-html.html
        'react/no-danger': 1,

        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 1,

        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 1,

        // NEVER mutate `this.state` directly, treat it as if it were immutable
        'react/no-direct-mutation-state': 1,

        // Prevent multiple component definition per file
        'react/no-multi-comp': 1,

        // Prevent usage of `setState`, use Flux/Reflux/Redux instead
        'react/no-set-state': 1,

        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 1,

        // Prefer ES6 class to `React.creatClass`
        'react/prefer-es6-class': 1,

        // Prevent missing props validation in a React component definition
        'react/prop-types': 1,

        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 1,

        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 1,

        // Enforce component methods order
        // The default ordering is listed on https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': 1,

        // Prevent missing parentheses around multilines JSX
        'react/wrap-multilines': 1
    }
};

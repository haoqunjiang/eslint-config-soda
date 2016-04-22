# eslint-config-soda
ESLint configurations for my personal projects.

## TODO

Since ESLint v2 removes the `ecmaFeatures` that are specific to ES6,
we now need to develop a plugin to disable some unrecommended ES6 features.

These features are:

1. `objectLiteralDuplicateProperties` (error prone)
2. `regexYFlag` (since it's not fully polyfillable)
3. `generators` (should be forbidden in browser, as the regenerator runtime is too big)

## Usage

This package export 4 ESLint configurations for your usage.

Note: rules related to ES6+ syntax are turned on for every ruleset except the
"legacy" one.

### eslint-config-soda

The default export contains all of our ESLint rules, including ES6+ features while compatible with ES3+ environments.

It is a general-purpose rule set, so many redundant rules are enabled, and conflict rules are disabled.

1. `npm install --save-dev eslint eslint-config-soda`
2. add `"extends": "soda"` to your `.eslintrc`

### eslint-config-soda/node

Lints Node.js projects, including rules for ES6+ features.

1. `npm install --save-dev eslint eslint-config-soda`
2. add `"extends": "soda/node"` to your `.eslintrc`

### eslint-config-soda/browser

Lints front-end projects, including rules for ES6+ features.
(generators/async/await are disabled since transpiling these features will introduce a lot of overhead).

1. `npm install --save-dev eslint eslint-config-soda`
2. add `"extends": "soda/browser"` to your `.eslintrc`

### eslint-config-soda/legacy

Lints ES5 and below, for browser use only.

1. `npm install --save-dev eslint-config-soda eslint`
2. add `"extends": "soda/legacy"` to your `.eslintrc`

### Module Loader

Users are not enforced to use one specific loader spec, so you need to specify
one by yourself after extending this package.

Here are the examples:

1. ES6 modules:
```JSON
{
    "extends": "soda",
    "parserOptions": {
        "sourceType": "module"
    }
}
```

2. CommonJS modules
```JSON
{
    "extends": "soda",
    "env": {
        "commonjs": true
    }
}
```

3. AMD modules
```JSON
{
    "extends": "soda",
    "env": {
        "amd": true
    }
}
```

### React Projects

If you are developing a React.js project, you might need the ruleset `eslint-config-soda-react`.

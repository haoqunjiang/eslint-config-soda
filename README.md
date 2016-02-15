# eslint-config-soda
ESLint configurations for my personal projects.
Largely influenced by [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) but with my personal understanding.

# Usage

This package export 3 ESLint configurations for your usage.

## eslint-config-soda

The default export contains all of our ESLint rules, including ES6+ and React. It requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

It is a general-purpose rule set, so many redundant rules are enabled, and conflict rules are disabled.

1. `npm install --save-dev eslint-config-soda babel-eslint eslint-plugin-react eslint`
2. add `"extends": "soda"` to your `.eslintrc`

## eslint-config-soda/node

Lints Node.js projects. Requires `eslint` and `babel-eslint`.

1. `npm install --save-dev eslint-config-soda babel-eslint eslint`
2. add `"extends": "soda/node"` to your `.eslintrc`

## eslint-config-soda/browser

Lints front end projects, including rules for ES6+ and React (generators/async/await are disabled since transpiling these features will introduce a lot of overhead).
Also, both `amd` and `commonjs` env are set to true, since nowadays most front end projects use one of these module standards, and many module bundlers support both of them.
It requires `eslint` and `babel-eslint`.

1. `npm install --save-dev eslint-config-soda babel-eslint eslint`
2. add `"extends": "soda/browser"` to your `.eslintrc`

## eslint-config-soda/legacy

Lints ES5 and below, for browser use only. Only requires `eslint`.

1. `npm install --save-dev eslint-config-soda eslint`
2. add `"extends": "soda/legacy"` to your `.eslintrc`

## eslint-config-soda/react

Only includes react-related rules. If you are developing a React.js project, you might want to extend this ruleset, along with any other previously mentioned ruleset.

module.exports = {
    env: {
        es6: true   // enable ES6+ globals such as Promise, Symbol, etc.
    },
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            // ES6+ modules are strict implicitly
            impliedStrict: true,

            // jsx should not be enabled for non-react projects
            jsx: false
        }
    },
    rules: {
        // 箭头函数的参数，即使只有一个也要带上括号
        'arrow-parens': ['warn', 'always'],

        // => 前后都应有空格
        'arrow-spacing': ['warn', { before: true, after: true }],

        // 生成器函数的星号前需要有空格，星号后不能有空格，例如 function *foo() {}
        'generator-star-spacing': ['warn', { before: true, after: false }],

        // yield *gen()
        'yield-star-spacing': ['warn', { before: true, after: false }],

        // Disallows spaces inside of the curly brace pair of template string interpolations
        'template-curly-spacing': ['warn', 'never'],

        // ES2015 provides a default class constructor if one is not specified.
        // As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class.
        'no-useless-constructor': 'warn',

        // 派生类的构造器函数必须有 super() 调用，其他情况下构造器函数都不允许调用 super()
        'constructor-super': 'error',

        // 派生类必须先调用过 super() 才能引用 this
        'no-this-before-super': 'error',

        // 不要写出不带 yield 语句的生成器函数
        'require-yield': 'warn',

        // 不要出现以下例子里的情况：
        // class A {}
        // A = 0;
        'no-class-assign': 'error',

        // 不能对常量进行赋值
        'no-const-assign': 'error',

        // 禁止 class 定义中出现两个同名成员
        'no-dupe-class-members': 'error',

        // 禁止不产生新变量的 destructuring pattern
        'no-empty-pattern': 'error',

        // `new Symbol()` throws a `TypeError` exception
        'no-new-symbol': 'error',

        // 1. Use object shorthands only when it can imporve readability
        // 2. Notice that [object literal shorthands cannot be used as constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions#Method_definitions_are_not_constructable)
        // 是否使用 object shorthand 应该由开发者视可读性而定，不一刀切
        'object-shorthand': 'off',  // [1, 'always', { ignoreConstructors: true }]

        // 如果需要使用的方法可以用 Reflect 的接口完成，则优先使用 Reflect
        // Reflect duplicates some methods of Object,
        // but its methods return booleans indicating whether the operation succeeded
        // (where the Object methods return the object that was modified).
        // IMO, it's not superior to the original form, since it's more intuitive to use try..catch
        // to handle exceptions than using return values.
        'prefer-reflect': 'off',

        // es6 version of the rule `no-restricted-modules`
        // 禁止某些库的使用，一般情况下用不到
        // no-restricted-imports: [2, 'os', 'fs']

        // 仅使用 let 和 const，不使用 var
        'no-var': 'warn',

        // 对于不会被修改的变量，优先考虑使用 const 而非 let
        // Besides, if all variables in destructuring should be `const`, this rule warns the variables;
        // otherwise, ignores them.
        'prefer-const': ['warn', { destructuring: 'all' }],

        // 如果仅仅是为了使用数组作为函数参数，那么应该优先考虑使用 spread operator 而不是 .apply()
        'prefer-spread': 'warn',

        // prefer rest parameters than `arguments`
        'prefer-rest-params': 'warn',

        // 回调函数尽可能使用箭头函数，而不是 Inline 的匿名函数
        'prefer-arrow-callback': 'warn',

        // 禁止复杂的字符串拼接，用模板引擎或 ES6 template string 替代
        'prefer-template': 'warn',

        // Disallow arrow functions in places where it could be confused with a comparison operator, so as to avoid potential typo
        'no-confusing-arrow': ['error', { allowParens: true }],

        // Require braces in arrow function body when there might be confusions
        'arrow-body-style': ['warn', 'as-needed'],

        // sort import statements
        // http://eslint.org/docs/rules/sort-imports
        'sort-imports': ['warn', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }],

        'no-duplicate-imports': ['warn', { includeExports: false }]
    }
}

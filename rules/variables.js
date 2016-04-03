module.exports = {
    rules: {
        // 禁止使用未经声明的变量，在 typeof 表达式中除外
        'no-undef': ['error', { typeof: false }],

        // 只能把 var 定义的变量当做块级变量来用，避免因为 variable hoisting 带来的难以察觉的 bug，同时方便将来迁移到 ES6 的 let/const
        'block-scoped-var': 'warn',

        // Identifiers should be declared before its usage
        // Functions are hoisted so it's safe to use before declaration.
        // Classes are not, so it *might* be danger to do so.
        // 除函数以外，所有变量在使用前都应被定义
        'no-use-before-define': ['error', { functions: false, classes: true }],

        // 个人觉得，在声明时是否初始化变量不是特别重要
        'init-declarations': 'off',

        // IE8- 中，catch 语句的参数会覆盖上层作用域的同名变量，对于需要兼容低版本浏览器的项目需要注意
        'no-catch-shadow': 'error',

        // 只有对象属性才能被 delete http://jslinterrors.com/only-properties-should-be-deleted/
        'no-delete-var': 'error',

        // （为了可读性）标签名不应与变量名重名
        'no-label-var': 'error',

        // 全局属性（NaN / Infinity / undefined）以及严格模式下的 restricted names （包括 eval / arguments）不可被覆盖
        'no-shadow-restricted-names': 'error',

        // 禁止跟上层作用域中的变量重名
        // 如果代码写在最外层作用域的话，建议开启 builtinGlobal: true，以避免与 window 下的全局属性重名
        // 否则的话不必开启，不然的话连 self 这个变量名都没法用了……
        'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions' }],

        'no-restricted-globals': 'off',

        // 没必要把变量初始化为 undefined
        'no-undef-init': 'error',

        // 考虑到 undefined 可能被覆盖，一般不建议直接使用它
        // foo === undefined 应该改用 typeof foo === 'undefined'
        'no-undefined': 'warn',

        // 定义过的变量都要被用到，不然的话很可能是没重构完导致的错误
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', caughtErrors: 'none' }],

        // Magic numbers should preferably be replaced by named constants
        // -1 and 0 are allowed for the convinience of array manipulations
        'no-magic-numbers': ['warn', { ignore: [-1, 0], ignoreArrayIndexes: true }]
    }
}

// Possible Errors & Best Practices
module.exports = {
  rules: {
    // Array has several methods for filtering, mapping, and folding.
    // If we forget to write return statement in a callback of those, it's probably a mistake.
    'array-callback-return': 'error',

    // Warns when using methods in `console` object
    // Since `console` is usually used for debugging purpose, thus should not be used in production environments
    'no-console': 'warn',

    // Production code should definitely not contain `debugger`
    // Also, with the advent of modern debugging and development tools,
    // `debugger` statement is less and less useful even in development environments.
    // 一般情况下不应该使用 debugger 语句进行调试
    'no-debugger': 'error',

    // 除非是很小型的个人项目，不然一般不建议使用浏览器自带的 alert / prompt / confirm，毕竟太丑（调试时除外）
    'no-alert': 'warn',

    // return 语句中如果出现赋值，可能是想返回表达式的结果，也可能是想返回全等操作的比较结果然后手误漏输等号
    // 所以此处要求，除非额外加了括号，不然赋值操作不要在 return 语句中表达
    'no-return-assign': ['error', 'except-parens'],

    // 禁止在条件表达式中进行赋值操作，除非有额外加上括号（比如 while((a = b)) 以及 while ((a = b) !== c) 都是被允许的）
    'no-cond-assign': ['error', 'except-parens'],

    // Comparing a literal expression in a condition is usually a typo or development trigger for a specific behavior
    // 条件表达式不能为常数（比如 if (true) 这种）
    'no-constant-condition': ['error', { checkLoops: true }],

    // 条件语句中没必要特地用双重否定 !! 将表达式转换为 boolean 类型
    'no-extra-boolean-cast': 'warn',

    // if else 语句中，if 的条件应当是肯定形式的，这样更加易读
    'no-negated-condition': 'warn',

    // The precedence of `in` and `instanceof` is lower than `!`
    // So do not mistakenly type `!a in b ` when you actually mean `!(a in b)`
    'no-unsafe-negation': 'error',

    // 函数参数、对象定义时的属性、case 语句的标签名不允许重名
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',

    // Empty block statements, while not technically errors, usually occur due to refactoring that wasn't completed
    // 出现空代码块一般是因为重构不完整，很有可能是忘了实现什么功能，所以除非明确注释说有意留空，不然都要警告
    'no-empty': 'warn',

    // Disallow use of empty functions
    // If you have to do so, turn this rule off inline
    'no-empty-function': 'error',

    // catch 代码块中不允许对 error 对象覆盖赋值
    'no-ex-assign': 'error',

    // 为了可读性，允许有不必要的括号
    'no-extra-parens': 'off',

    // 这个规则实施起来太繁琐，暂时也不启用
    'no-mixed-operators': 'off',

    // 多余的分号会警告
    'no-extra-semi': 'warn',

    // 避免忘了加分号而下一行以 ([ 等开头的情况
    'no-unexpected-multiline': 'error',

    // 函数声明不得被覆盖赋值
    // 即，形如以下形式的代码被视为错误：
    // function foo() {}
    // foo = bar;
    // 函数表达式可以被覆盖赋值，即，以下代码不报错：
    // var foo = function() {};
    // foo = bar;
    'no-func-assign': 'error',

    // ES6 引入了 block scoped function，这是一个 breaking change
    // 部分浏览器也已经在 strict mode 下实现了这个特性
    // 所以为了同时考虑 ES5 和 ES6 的兼容性，应当禁止在代码定义 block scoped function
    'no-inner-declarations': ['warn', 'functions'],

    // 禁止无效的正则表达式
    'no-invalid-regexp': 'error',

    // 在正则中出现 0x0~0x31 的控制字符一般都是因为手误，根据官方建议，这里加上警告
    'no-control-regex': 'warn',

    // 正则表达式中不宜使用多个连续空格，最好使用形如 / {3}/ 这样的方式表示多个空格（此处仅用了一个空格字符）
    'no-regex-spaces': 'error',

    // 零宽空格、行分隔符之类的非常规空白符要是不小心加进了代码，会引起难以察觉的错误，所以禁止（字符串中仍然可以使用）
    // 此外，JavaScript 规定字符串中不能（直接）出现 U+2028 和 U+2029 这两个字符，但 JSON 允许，这也是一个潜在的 bug 来源
    'no-irregular-whitespace': 'error',

    // 正则中不允许出现空匹配组（/^abc[]/ 这种，这样的正则无法匹配任何字符串）
    'no-empty-character-class': 'error',

    // 形如 /=foo/ 的正则应当写成 /\=foo/ 以免读者把 / 误看成除号（不过个人觉得这个规则没什么用）
    'no-div-regex': 'warn',

    // 全局变量 Math 和 JSON 没有 [[Call]] 属性，不能被当做函数调用
    'no-obj-calls': 'error',

    // 直接定义稀疏数组字面量有很多潜在的风险，参见官方文档 http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // The presence of unreachable code is usually a sign of a coding error
    'no-unreachable': 'error',

    // Self assignments have no effect, so probably those are an error due to incomplete refactoring
    'no-self-assign': ['error', { props: true }],

    // Variables in a loop condition often are modified in the loop. If not, it's possibly a mistake
    'no-unmodified-loop-condition': 'error',

    // Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
    'no-unused-labels': 'error',

    // 不要试图直接拿变量和 NaN 比较（因为永远返回 false），用 isNaN 和 Number.isNaN
    'use-isnan': 'error',

    // 唯一需要变量自己与自己比较的场景是判断 NaN，但是这种情况下优先使用 Number.isNaN
    // 不过 Number.isNaN 是 ES6 标准，IE 以及 Safari 8- 不支持，而 isNaN 又有类型转换
    // 所以在没有 polyfill 的情况下还是判断 x !== x 吧……
    'no-self-compare': 'warn',

    // 不强制要求每个函数都带上 JSDoc 风格的注释
    'require-jsdoc': 'off',

    // 保证 JSDoc 注释符合其语法（因为 JSDoc 对 ES2015 支持不好，暂时放弃）
    'valid-jsdoc': 'off',

    // 跟 typeof 的结果对比的字符串必须是 number、string 等 typeof 表达式可能的取值，不然的话很有可能是出现了 typo
    'valid-typeof': 'error',

    // 如果用 Object.defineProperty 定义了属性的 set 方法，则必须有配对的 get 方法
    'accessor-pairs': ['error', { getWithoutSet: true }],

    // 保证函数要么肯定会有返回值，要么肯定没有返回值，避免一些难以察觉的问题
    // 不过，更好的办法是直接用上 TypeScript/flow 写强类型的代码
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],

    // if / else if / else / for / while / do 后面跟的代码块，必须加上花括号 {}
    'curly': ['warn', 'all'],

    // switch 语句不强制要求带 default
    'default-case': 'off',

    // Disallows lexical declarations (let/const/function/class) in case/default clauses.
    // Because lexical declarations are visible in the entire block but only gets initialized when it is assigned.
    // This is a typical TDZ problem.
    // case 语句中不准出现块级变量定义（let/const/function/class），因为这个可能会带来 TDZ 的问题
    'no-case-declarations': 'error',

    // switch 语句如果出现了 fall-through 则警告
    'no-fallthrough': 'warn',

    // 尽可能用 dot-notation 而非下标来获取对象属性，避免可能的 bug
    // 为了保证与 ES3/IE8- 的兼容性，属性名为语法关键词的，仍然用字符串下标获取
    'dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],

    // 相等性比较必须用 === 和 !==，除非是：两个字面量相比较 / 判断 typeof 结果 / 与 null 比较
    'eqeqeq': ['warn', 'smart'],

    // 允许与 null 比较，毕竟写 if (a == null) 比 if (a === null || a === undefined) 省事多了
    'no-eq-null': 'off',

    // 在使用 for in 语句时必须做 hasOwnProperty 检查
    // 为了防止 hasOwnPeorperty 被覆盖，正确的用法是：{}.hasOwnProperty.call(obj, key)
    'guard-for-in': 'warn',

    // 考虑到与严格模式的兼容性，禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 'warn',

    // 如果 if 语句中包含 return，则 else 中没必要加上 return，可以直接放到代码块后面
    // 具体的判断规则比较麻烦，可以参考文档 http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'warn',

    // JavaScript 没有 goto 语句，label 只在循环和 switch 中有用，所以其他地方如果出现 label 那一定是出问题了
    'no-labels': ['error', { allowLoop: true, allowSwitch: true }],

    // If a loop contains no nested loops or switches, labeling the loop is unnecessary
    'no-extra-label': 'error',

    // 禁止使用 eval
    'no-eval': 'error',

    // 禁止使用 execScript，禁止使用字符串作为 setTimeout、setInterval 的第一个参数
    'no-implied-eval': 'error',

    // 一般情况下禁止使用 new Function
    // 当然如果写一些比较高级的库可能还是用得到的（比如 es6-module-loader 这种）
    'no-new-func': 'warn',

    // 给 location.href 赋值为 javascript: 开头的值的效果和 eval 相近，所以禁止
    // 给 a 标签的 href 赋值为 javascript:void(0) 时可以临时禁止（个人认为 javascript:void(0) 优于 //）
    'no-script-url': 'warn',

    // 禁止对原生/全局对象进行覆盖赋值
    'no-global-assign': 'error',

    // 禁止扩展原生对象，如果是 polyfill，也建议直接引用 core-js 等第三方库而不是自己写
    'no-extend-native': 'error',

    // 对于没有用到 this 的函数，没必要 bind
    'no-extra-bind': 'warn',

    // 浮点数不可省略小数点前的 0，形如 .5 -.7 的形式都会触发警告
    'no-floating-decimal': 'warn',

    // 不允许对 number/string 类型进行隐式强制类型转换（比如 +stringOfNumber 和 '' + foo 这样的形式）
    // 允许使用 !!foo 得到 boolean 值
    'no-implicit-coercion': ['warn', { boolean: false, number: true, string: true }],

    // Globals should be explicitly assigned to `window` or `self` if that is the intent
    'no-implicit-globals': 'error',

    // 上下文中不存在 this 的时候不能引用 this （注意：只有函数名以大写字母开头的才会被认为是 constructor 函数）
    // 因为 jQuery 的事件回调中存在大量的 this 引用，所以这里暂时选择关闭，非 jQuery 项目请打开
    // 详细文档 http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // 在 ES5 前，一个 block 不会产生新的 scope，所以，纯粹的花括号是没有意义的
    // 如果用了 ES6，则请开启 blockBindings: true，此时这个规则失去作用
    'no-lone-blocks': 'warn',

    // 禁止使用 SpiderMonkey 的 __iterator__ 扩展
    // 关于 __iterator__ 可以看这两个文档：
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features//Object_methods
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // 循环中禁止定义函数
    // 不过有时候在循环里使用 forEach 之类的方法时，写 inline function 还是很方便的而且不会有什么问题
    // ESLint 无法对这种情况区别对待，所以只好降低提醒等级至「警告」
    'no-loop-func': 'warn',

    // 禁止通过 \ 后面跟换行符的方法定义多行字符串
    // 这个解析规则是 ES5 才有的（虽然 IE 6-8 只支持 ES3，但 JScript 已经额外实现了这个特性），也不够灵活（主要是对缩进的处理），建议使用字符串拼接
    // 而 ES6+ 则建议使用 template string 定义多行字符串
    'no-multi-str': 'warn',

    // 禁止 new Wrapper Objects
    // 即，禁止：new Object()、new Array()、new String()、new Number() 和 new Boolean()
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-new-wrappers': 'error',

    // ES5+ 中，八进制的转义序列被 deprecated 了，应当用十六进制或 Unicode 来替代
    // 即，'\251' 应当改写为 '\u00A9' 或 '\xA9'
    'no-octal-escape': 'error',

    // 禁止使用八进制字面量
    // ES5+ 在 sloppy mode 中 deprecate 了这个特性，而在 strict mode 中则完全禁止了
    'no-octal': 'error',

    // 禁止对函数参数进行覆盖赋值（不过可以对参数的属性进行操作）
    // 这里的参数指的是一个 local binding，所以参数解构里出现的 binding 也属于一个参数
    // e.g. `function func({ from }) { from = from || 2; }` here from is a local binding, thus leading to a warning
    'no-param-reassign': ['warn', { props: false }],

    // 在 Node.js 中，尽量使用 config.js 文件而不是 process.env 来设置配置参数
    'no-process-env': 'warn',

    // 不建议使用 __proto__ 属性
    // 虽然很多浏览器（除了 IE10-）都实现了 __proto__，但是直到 ES6 才为了兼容性而被标准化
    // 但一般情况下仍然不建议使用 __proto__，推荐的方法是 Object.getPrototypeOf (IE 9+)
    'no-proto': 'warn',

    // 禁止重复声明变量以及全局变量
    // 针对场景：浏览器环境下会有很多全局变量，不注意的话很可能踩坑，比如以下代码
    // var top = 0; console.log(top + 1); // 在最外层作用域输出 'Object [Window]1'，其余情况输出 1
    // 这个规则应当与文件开头的 env 设置配合使用（因为不同环境下的 builtin globals 并不相同）
    'no-redeclare': ['error', { builtinGlobals: true }],

    // 禁止使用逗号语句
    // 除外情况：for 语句的初始化；被一对额外的括号包裹
    'no-sequences': 'warn',

    // throw 后面跟的只能是 new Error 对象，以便记录和查看调用栈
    'no-throw-literal': 'error',

    // JavaScript suspends the control flow statements of try and catch blocks until the execution of finally block finishes
    // So, when return, throw, break, or continue is used in finally, control flow statements inside try and catch are overwritten, which is considered as unexpected behavior
    'no-unsafe-finally': 'error',

    // 尽量不要出现没有用到的表达式
    // 允许使用短路求值（a && b() 这种）
    'no-unused-expressions': ['warn', { allowShortCircuit: true }],

    // 单行的字符串字面量拼接是没必要的，完全可以写成一个字符串
    // 比如 var a = '1' + '0' 应当写成 var a = '10'
    // 多行的字符串拼接不警告
    'no-useless-concat': 'warn',

    // 去掉不必要的 .call 和 .apply，因为它们的效率会比直接调用函数差一点点
    'no-useless-call': 'warn',

    // 在字符串或者正则表达式里使用无效的转义字符是没有效果的，因此这很有可能是写错了
    'no-useless-escape': 'error',

    'no-useless-return': 'error',

    // ES5- 的 undefined 是可覆盖赋值的，而且子作用域里可以定义一个叫 undefined 的变量覆盖掉全局的 undefined
    // 所以此时需要用 void 0 获得真正的 undefined
    // 但一般情况下没必要用到 void，所以警告
    'no-void': 'warn',

    // 不要使用 with 语句
    'no-with': 'error',

    // 调用 parseInt 方法需要提供 radix 参数
    'radix': ['warn', 'always'],

    // 变量就近声明就好，全部提升到顶部不容易阅读
    'vars-on-top': 'off',

    // IIFE 调用必须用括弧 () 包裹
    // 例：var x = (function () { return { y: 'warn' };})();
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

    // 如果代码里有注释以 'TODO'、'FIXME' 字样开头的话，警告
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'start' }],

    // yoda conditions 即，条件判断语句中，常量前置
    // 个人认为这会影响可读性，而且 ESLint 已经保证了在条件判断中不会出现无意的赋值语句，所以禁用了这个规则
    'yoda': 'off',

    // If a class method does not use this, it can safely be made a static function
    'class-methods-use-this': 'warn',
  },
}

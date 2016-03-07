module.exports = {
    rules: {
        // Stylistic Issues

        // [semicolon-less style](https://www.youtube.com/watch?v=gsfbh17Ax9I)
        'semi': [1, 'never'],

        // 分号前不得有空格，分号后（如果有内容）必须有空格
        'semi-spacing': [1, { before: false, after: true }],

        // 逗号只能出现在行中或行末，不能出现在行首
        'comma-style': [1, 'last'],

        // 逗号前不得有空格，逗号后（如果有内容）必须有空格
        'comma-spacing': [1, { before: false, after: true }],

        // 如果在点号 . 处换行，点号应当在下一行行首
        'dot-location': [1, 'property'],

        // 如果在操作符（比如 +）处换行，操作符应当在下一行行首
        // 对于一长串字符串的拼接，感觉在行末更舒服
        'operator-linebreak': 0,    // [1, before]

        // Enforces empty newlines after var, let or const
        // 在变量定义后应当跟着一行空行
        'newline-after-var': 0, // [1, 'always'],

        // Chained method calls with a depth greater than 3 should be followd by newline per call
        // Seems somewhat annoying in real life
        'newline-per-chained-call': 0, // [1, { ignoreChainWithDepth: 3 }],

        // 一律使用单引号，除非字符串的值中有单引号
        'quotes': [1, 'single', 'avoid-escape'],

        // 采用 4 个空格缩进，可以使代码看起来更整洁点
        'indent': [1, 4, { SwitchCase: 1 }],   // eslint-disable-line no-magic-numbers

        // 严禁空格和 Tab 混用
        'no-mixed-spaces-and-tabs': 2,

        // 禁止多个连续空格
        // 例外：对象属性、变量定义和 import 语句
        'no-multi-spaces': [1, { exceptions: { Property: true, VariableDeclaration: true, ImportDeclaration: true } }],

        // 行末空格应当被去除
        'no-trailing-spaces': 1,

        // 调用函数时，函数名和括号间不能有空格
        'no-spaced-func': 1,

        // Alerts for whitespace around the dot or before the opening bracket before properties of objects if they are on the same line
        'no-whitespace-before-property': 1,

        // 中缀操作符两侧都需要有空格（a|0 这种强制转换 a 为 int32 类型的操作除外）
        'space-infix-ops': [1, { int32Hint: true }],

        // 单词形式的单目操作符（new、delete、void、typeof 等）后面应当跟有空格
        // 符号形式的单目操作符（++、--、-、+、!、!! 等）后面不应有空格
        'space-unary-ops': [1, { words: true, nonwords: false }],

        // 关键词前后都需要有空格
        'keyword-spacing': [1, { before: true, after: true, overrides: {} }],

        // 函数定义的 () 前不应有空格
        // 示例：function() {}、function foo() {}
        'space-before-function-paren': [1, 'never'],

        // 代码块的花括号 { 前面应当有个空格
        'space-before-blocks': [1, 'always'],

        // single line blocks 的 { 之后以及 } 之前应当有空格
        // 比如 function foo() { return 0; }
        'block-spacing': [1, 'always'],

        // 花括号 { 一律在行末，除非表达式只有一行
        'brace-style': [1, '1tbs', { allowSingleLine: true }],

        // ( 右侧和 ) 左侧不应有空格
        'space-in-parens': [1, 'never'],

        // object literal 的 { 后以及 } 前都应有空格
        'object-curly-spacing': [1, 'always'],

        // 对于数组的话，个人觉得不带空格更美观
        'array-bracket-spacing': [1, 'never'],

        // computed property 的方括号中是否需要带空格无所谓，属性名太复杂时加空格保证可读性，简单的话就不加了
        'computed-property-spacing': 0,

        // 定义对象属性时，冒号前不应有空格，冒号后必须有空格；在需要对齐的场合，padding 空格加在冒号右侧，但不强制要求对齐
        'key-spacing': [1, { beforeColon: false, afterColon: true }],

        // 用于注释的 // 和 /* 后面应当有个空格
        'spaced-comment': [1, 'always'],

        // 在多行注释开始前要有一个空行（在代码块开头、对象字面量和数组字面量的开头结尾时除外）
        'lines-around-comment': [1, {
            beforeBlockComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true
        }],

        // 代码块首尾不应有空行
        'padded-blocks': [1, 'never'],

        // 最多可以有连续 5 个空行
        // At the end of file, one and only one newline is required
        'no-multiple-empty-lines': [1, { max: 5, maxEOF: 1 }],

        // 必须用 LF 作为换行符
        'linebreak-style': [2, 'unix'],

        // 非空文件应当以换行结尾（UNIX 惯例）
        'eol-last': 1,

        // else 语句中如果有且仅有一个 if 判断
        // 即，形如 else { if () {} } 的语句，应当用 else if 代替
        'no-lonely-if': 1,

        // 定义 object literal 时，属性名如非必要，不应加引号，不过需要优先保证一致性（即，如果有一个属性名必须加引号，则其它属性名也要加）
        'quote-props': [1, 'consistent-as-needed'],

        // Disallow identifier naming with dangling underscores, unless as members of `this`
        'no-underscore-dangle': [1, { allowAfterThis: true }],

        // 采用驼峰命名法（不检查对象属性的命名，考虑到可能会和后端数据通信等情况）
        'camelcase': [1, { properties: 'never' }],

        // 如果要把 this 赋给一个临时的变量，那这个变量必须命名为 self 或者 that，不能有其他别名
        // ES6+ 的项目请使用箭头函数，不需要这个规则，参见 smells/no-this-assign 规则
        'consistent-this': [1, 'self', 'that'],

        // 不要求每个函数都有 function name，函数表达式里还是允许匿名函数的，不过给函数表达式加上函数名有利于输出更清晰的 stack trace
        'func-names': 0,

        // 使用函数表达式还是函数声明来定义函数，随开发者喜好而定，不作要求
        'func-style': 0,

        // 对标示符长度不作限制，考虑到有些人写过 Objective-C，习惯长变量名……
        'id-length': 0,

        // 构造器函数必须以大写字母开头、以大写字母开头的函数只能作为构造器函数被调用（除了内置类型比如 Array 这些）
        'new-cap': [1, { newIsCap: true, capIsNew: true }],

        // 虽然 JavaScript 允许在 new 的时候函数名后面不带括号，不过这个风格看起来不大舒服，所以还是要求必须加上括号
        'new-parens': 1,

        // 允许使用 continue 语句
        'no-continue': 0,

        // 允许行内注释
        'no-inline-comments': 0,

        // 允许使用三目运算符
        'no-ternary': 0,

        // 但不要嵌套三目运算，这样可读性很差
        'no-nested-ternary': 1,

        // 没必要的三目运算也应该去掉，比如 var a = (x === 2) ? true : false;
        'no-unneeded-ternary': 1,

        // 允许 ++ 和 --
        'no-plusplus': 0,

        // 有的规范建议正则表达式用括号括起来，以增加可读性
        // 不过个人认为没必要
        'wrap-regex': 0,

        // 变量声明主要考虑可读性，不必强制在一个 var 语句或者多个语句中声明
        'one-var': 0,

        'one-var-declaration-per-line': 0,

        // 变量声明的顺序由作者自行考虑，不强制
        'sort-vars': 0,

        // operator assignment shorthand 如 += 等，在可读性好的时候再用，不强制统一风格
        'operator-assignment': 0,

        // 这个规则用于置顶代码中标示符的命名规范
        // 个人觉得有点不必要……而且真正想要规范的部分是无法简单地用正则表达出来的（比如 button 必须缩写为 btn 之类的规范）
        'id-match': 0,

        // Blacklist certain identifiers to prevent them being used
        // in variable declarations, function declarations and object properties
        'id-blacklist': 0
    }
}

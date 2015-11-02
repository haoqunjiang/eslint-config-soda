module.exports = {
    env: {
        node: true
    },
    rules: {
        // Enables methods in `console` object
        'no-console': 0,

        // if (err) { callback(err); } 应该写成 if (err) { return callback(err); }
        // 这个规则有一定的局限性，参见官方文档 http://eslint.org/docs/rules/callback-return
        'callback-return': [2, ['callback', 'cb', 'next']],

        // 记得处理 err 参数
        'handle-callback-err': 2,

        // 这个解释起来有点麻烦，一般也用不到，可以参见官方文档 http://eslint.org/docs/rules/no-mixed-requires
        // 主要有两点：
        // 1. node 中 require 语句和一般的 var 语句要分开
        // 2. 不同类型的 require (core module / file module...) 也需要分开
        'no-mixed-requires': [1, { grouping: true }],

        // var foo = new require('foo'); 是把 require 当成构造器函数了，与 var foo = new (require('foo')); 不等价，容易误用
        // 更好的做法是 var Foo = require('foo'); var foo = new Foo();
        // 所以此处禁止直接在 require 语句里使用 new
        'no-new-require': 2,

        // 为了多平台兼容性，用 path.join 和 path.resolve 替代字符串拼接
        'no-path-concat': 2,

        // 一般不建议用 process.exit，更好的做法是抛出异常
        'no-process-exit': 2,

        // 禁止某些库的使用，一般情况下用不到
        // no-restricted-modules: [2, 'os', 'fs']

        // 不建议使用同步函数
        'no-sync': 1,

        // 出于性能和可读性考虑，只能在最外层使用 require
        // 个人感觉不是很有必要
        'global-require': 0
    }
};

/* eslint-disable no-magic-numbers */
module.exports = {
    rules: {
        // 单个函数最多有 30 行（内部的其他函数定义不算）
        'max-statements': [2, 30],

        // 每行最多 140 个字符，比 80 个字符多一点，毕竟可能会有很多缩进，而且反正显示器够大
        'max-len': [1, 140],

        // If a function has too many parameters, you should consider taking an `option` object as the paramter.
        // Better turn off for AMD & Angular 1.x modules by inline comments
        // 如果函数参数太多的话，应当使用 `option` 对象作为参数
        // 对于 AMD 格式以及 Angular 1.x 模块，最好通过 inline comments 的方式关闭这条规则
        'max-params': [1, 5],

        // 至多嵌套五层代码块
        'max-depth': [2, 5],

        // Too many nested callbacks would be hard to read
        // 最多允许嵌套两层回调
        'max-nested-callbacks': [1, 4],

        // [cyclomatic complexity](http://en.wikipedia.org/wiki/Cyclomatic_complexity) should be no greater than 8
        // 圈复杂度上限为 8
        'complexity': [1, 8]
    }
};

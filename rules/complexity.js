/* eslint-disable no-magic-numbers */
module.exports = {
    rules: {
        // 单个函数最多有 30 行（内部的其他函数定义不算）
        'max-statements': [2, 30],

        // 至多嵌套五层代码块
        'max-depth': [2, 5],

        // 每行最多 140 个字符，比 80 个字符多一点，毕竟可能会有很多缩进，而且反正显示器够大
        // 因为目前开发使用 AMD 模块，define 的时候依赖注入的参数列表可能有点长……于是暂时放弃这个校验
        'max-len': 0,  // [1, 140]

        // 上限设置到 10 是因为 Angular 依赖注入可能会有很多
        'max-params': [1, 10],

        // 最多允许嵌套两层回调
        'max-nested-callbacks': [1, 2],

        // [cyclomatic complexity](http://en.wikipedia.org/wiki/Cyclomatic_complexity) 圈复杂度上限为 7
        'complexity': [1, 7]
    }
};

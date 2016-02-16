module.exports = {
    env: {
        browser: true
    }
    // ESLint v2 no longer has this option
    // Needs a custom rule
    // ecmaFeatures: {
    //     // transpiling generators with regenerator.js will introduce a lot of overhead
    //     // 这个特性需要使用 regenerator 才能编译到 ES5 代码，而编译后代码量较大（性能也不一定够好）
    //     // 所以不适合在浏览器环境中使用
    //     generators: false
    // }
}

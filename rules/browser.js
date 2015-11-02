module.exports = {
    env: {
        browser: true,
        amd: true,
        commonjs: true
    },
    ecmaFeatures: {
        // transpiling generators with regenerator.js will introduce a lot of overhead
        generators: false
    }
};

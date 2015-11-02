// The rule no-restricted-syntax disallows some AST node types.
// Available AST node types: https://github.com/eslint/espree/blob/master/lib/ast-node-types.js
// Online AST parser: http://eslint.org/parser/

// Here, the debugger and with statements are disallowed.
module.exports = {
    rules: {
        'no-restricted-syntax': [2, 'DebuggerStatement', 'WithStatement']
    }
};

module.exports = {
    rules: {
        // babel inserts 'use strict' automatically
        // also, `node --use_strict` will run the whole app in strict mode
        // therefore the Use Strict Directives are no longer necessary
        strict: 'off'
    }
}

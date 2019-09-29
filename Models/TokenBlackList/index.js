const fs = require('fs')

class TokenBlackList {
    constructor(tokens = {}) {
        Object.assign(this, tokens)
    }
}

fs.readdirSync(__dirname + '/Methods/').forEach(function (file) {
    if (file !== 'index.js') {
        let filename = file.replace('.js', '')
        TokenBlackList.prototype[filename] = require(__dirname + '/Methods/' + filename)
    }
})
module.exports = TokenBlackList

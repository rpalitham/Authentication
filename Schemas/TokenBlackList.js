const mongoose = require('mongoose')

const TokenBlackListSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    token : {
        type: String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = db.model('TokenBlackList', TokenBlackListSchema)

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true,
    min : 5
  },
  email : {
    type : String,
    required : true,
    min : 5
  },
  password : {
    type : String,
    min : 5
  },
  date : {
    type : Date,
    default : Date.now
  },
  authType : {
    type : String
  },
  userId : {
    type : String
  }
})


module.exports = db.model('User', userSchema)

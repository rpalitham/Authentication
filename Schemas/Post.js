const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  user_id : {
    type: String,
    required : true
  },
  date : {
    type : Date,
    default : Date.now
  }
})


module.exports = db.model('Post', postSchema)

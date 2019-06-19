const fs = require('fs')

class User{
  constructor(user = {}){
    Object.assign(this, user)
  }
}

fs.readdirSync(__dirname+'/Methods/').forEach(function(file){
  if(file !== 'index.js'){
    let filename = file.replace('.js','')
    User.prototype[filename] = require(__dirname + '/Methods/' + filename)
  }
})
module.exports = User

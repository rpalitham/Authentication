const fs = require('fs')

class Posts{
  constructor(user = {}){
    Object.assign(this, user)
  }
}

fs.readdirSync(__dirname+'/Methods/').forEach(function(file){
  if(file !== 'index.js'){
    let filename = file.replace('.js','')
    Posts.prototype[filename] = require(__dirname + '/Methods/' + filename)
  }
})
module.exports = Posts

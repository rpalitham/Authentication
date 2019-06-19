const Post = require(`${appPath}/Schemas/Post`)

module.exports = function(request){
  return(async () => {
    try {
    let save = await Post.create(request)
    return save
  } catch (e) {
      console.log(e);
      throw e
  }
  })()
}

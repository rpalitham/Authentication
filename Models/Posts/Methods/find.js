const Post = require(`${appPath}/Schemas/Post`)

module.exports = function(request){
  return(async () => {
    try {
      let posts = await Post.find({
        [request.key]: request.value
      })
    return posts
  } catch (e) {
      console.log(e);
      throw e
  }
  })()
}

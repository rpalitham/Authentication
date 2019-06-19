const Posts = require(`${appPath}/Models/Posts`)


module.exports =  async (req, res) => {
  try{
    let post = new Posts()
    let options = {
      key: 'user_id',
      value: req.user._id
    }
    let getPosts = await post.find(options)
    res.json(getPosts).status(200)
  }catch(err){
    res.json({err}).status(500)
  }
};

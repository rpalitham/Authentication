const Posts = require(`${appPath}/Models/Posts`)

module.exports =  async (req, res) => {
  try{
    let post = new Posts()
    let data = {
      title : req.body.title,
      description : req.body.description,
      user_id : req.user._id
    }
    
    const savedPost =  await post.create(data)
    res.json({savedPost}).status(200)

  }catch(err){
    res.json({err}).status(400)
  }
};

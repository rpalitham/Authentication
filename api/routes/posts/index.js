const express = require('express')
const Post = require('../../models/Post')
const router = express.Router()

router.post('/', async (req, res) => {

  const post = new Post({
    title : req.body.title,
    description : req.body.description,
    user_id : req.user._id
  })
  
  try{
    const savedPost =  await post.save()
    res.send(savedPost).status(200)

  }catch(err){
    res.send(err).status(400)
  }
})

router.get('/', async (req, res) => {
  try{
    const posts = await Post.find({user_id : req.user._id})
    res.send(posts).status(200)
  }catch(err){
    res.send(err).status(500)
  }
})

module.exports = router

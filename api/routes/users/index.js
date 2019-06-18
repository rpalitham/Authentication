const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require("../../models/User")

router.use('/register', async (req, res) => {
  try{
    const email_exists = await User.findOne({email:req.body.email})
    if ( email_exists ) return res.send("Email already exists")

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = new User({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword
          })

    const savedUser = await user.save()
    res.status(200).send(savedUser)
  }
  catch(err){
    res.status(400).send(err)
  }
})


router.use('/login', async (req,res) => {
  try{
    const user = await User.findOne({email: req.body.email})
    if( !user ) return res.status(400).send("email doesn't exists")

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    if( !isPasswordValid ) return res.send('Invalid Password').status(400)

    jwt.sign({ _id : user._id}, "shhh", { expiresIn: '1h' }, (err, token) => {
      res.header('auth-token', token).send(token)
    })

  }catch(err){
    res.send(err).status(500)
  }
})

module.exports = router

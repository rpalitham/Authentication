const User = require(`${appPath}/Models/User`)
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = async (req,res) => {
  try{
    let userModel = new User()  
    let user = {}
    if(req.body.authType == "facebook"){
      let obj = {
        authType : "facebook",
        email : req.body.email
      }
      user = await userModel.findOne(obj)
      if(!user){
        let data  = {
          authType: "facebook",
          email: req.body.email,
          username : req.body.name,
          userId : req.body.userID
        }
        user = await userModel.create(data)
      }

    } else if (req.body.authType === "google"){
      let obj = {
        authType: "google",
        email: req.body.email
      }
      user = await userModel.findOne(obj)
      if (!user) {
        let data = {
          authType: "google",
          email: req.body.email,
          username: req.body.name,
          userId: req.body.userId
        }
        user = await userModel.create(data)
      }
    }
    else{
      user = await userModel.findOne({email : req.body.email})
      if (!user) {
        return res.status(200).json({ success: false, msg: "email doesn't exists" })
      }
      else if (!req.body.password) {
        return res.status(200).json({ success: true, username: user.username, email: user.email, id: user._id })
      }
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
      if (!isPasswordValid) return res.json({ success: false, msg: 'Invalid Password' }).status(200)
    }

    jwt.sign({ _id: user._id }, "shhh", { expiresIn: '1h' }, (err, token) => {
      res.header('auth-token', token).json({ success: true, token, username: user.username, email: user.email, id: user._id }).status(200)
    })

  }catch(err){
    console.log("err", err)
    res.json({err}).status(500)
  }
}

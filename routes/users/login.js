const User = require(`${appPath}/Models/User`)
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = async (req,res) => {
  try{
    let userModel = new User()
    let options = {
      key: 'email',
      value: req.body.email
    }
    let user = await userModel.findOne(options)
    if( !user ) return res.status(400).json({msg:"email doesn't exists"})

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    if( !isPasswordValid ) return res.json({msg:'Invalid Password'}).status(400)

    jwt.sign({ _id : user._id}, "shhh", { expiresIn: '1h' }, (err, token) => {
      res.header('auth-token', token).json({token}).status(200)
    })

  }catch(err){
    res.json({err}).status(500)
  }
}

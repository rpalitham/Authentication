const User = require(`${appPath}/Models/User`)
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  try{
    let user = new User()
    let email_check = {
      'email': req.body.email
    }
    let user_check = {
     "username": req.body.username
    }
    const user_exists = await user.findOne(user_check)
    if (user_exists ) return res.status(200).json({success : false, msg : "usename already taken"})

    const email_exists = await user.findOne(email_check);
    if ( email_exists ) return res.status(200).json({success : false, msg : "email already exists"})

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    let data = {
            username : req.body.username,
            authType : "allies",
            email : req.body.email,
            phone : req.body.phone,
            password : hashedPassword
          }

    const savedUser = await user.create(data)
    res.status(200).json({ success: true, ...savedUser._doc });
  }
  catch(err){
    res.status(400).json(err)
  }
}

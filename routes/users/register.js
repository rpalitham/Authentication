const User = require(`${appPath}/Models/User`)
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  try{
    let user = new User()
    let options = {
      key: 'email',
      value: req.body.email
    }
    const email_exists = await user.findOne(options)
    if ( email_exists ) return res.json({msg:"Email already exists"})

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    let data = {
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword
          }

    const savedUser = await user.create(data)
    res.status(200).json(savedUser)
  }
  catch(err){
    res.status(400).json(err)
  }
}

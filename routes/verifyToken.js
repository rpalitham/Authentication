const jwt = require('jsonwebtoken')
const TokenBlackList = require(`${appPath}/Models/TokenBlackList`)

module.exports = (req, res, next) => {
  const token = req.header('auth-token')
  if( !token ) return res.send('Access Denied').status(401)
  try{
    const token = new TokenBlackList()
    const blackList = token.find({userId: req.body.userId, token : token})
    if(blackList){
      return res.send('Invalid token').status(401)
    }
    const verified = jwt.verify(token, 'shhh')
    req.user = verified
    next()
  }
  catch(err){
    res.send('Invalid token').status(401)
  }
}

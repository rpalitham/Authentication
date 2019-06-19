const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.header('auth-token')
  if( !token ) return res.send('Access Denied').status(401)

  try{
    const verified = jwt.verify(token, 'shhh')
    req.user = verified
    next()
  }catch(err){
    res.send('Invalid token').status(401)
  }
}

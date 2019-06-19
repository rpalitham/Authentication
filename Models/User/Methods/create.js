const User = require(`${appPath}/Schemas/User`)

module.exports = function(request){
  return(async () => {
    try {
    let save = await User.create(request)
    return save
  } catch (e) {
      console.log(e);
      throw e
  }
  })()
}

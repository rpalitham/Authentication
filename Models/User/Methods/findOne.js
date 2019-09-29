const User = require(`${appPath}/Schemas/User`)

module.exports = function(request){
  return(async () => {
    try {
      let findOne = await User.findOne(request)
      return findOne
   }catch (e) {
      console.log("error", e);
      throw e
  }
  })()
}

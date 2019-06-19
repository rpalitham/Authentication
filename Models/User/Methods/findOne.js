const User = require(`${appPath}/Schemas/User`)

module.exports = function(request){
  return(async () => {
    console.log(request);
    try {
    let findOne = await User.findOne({
      [request.key]: request.value
    })
    return findOne
  } catch (e) {
      console.log(e);
      throw e
  }
  })()
}

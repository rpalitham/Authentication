const TokenBlackList = require(`${appPath}/Schemas/TokenBlackList`)

module.exports = function (request) {
    return (async () => {
        try {
            let save = await TokenBlackList.create(request)
            return save
        } catch (e) {
            console.log(e);
            throw e
        }
    })()
}

const TokenBlackList = require(`${appPath}/Models/TokenBlackList`)

module.exports = async (req, res) => {
    try {
        console.log("================>", req.headers)
        let token = new TokenBlackList()
        let obj = {
            userId : req.body.userId,
            token : req.headers["auth-token"]
        }
        let savedToken = await token.create(obj)
        res.status(200).json({ success: true, savedToken, msg: "Logged out successfully" })
    }
    catch (err) {
        res.status(400).json(err)
    }
}

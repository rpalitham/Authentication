const express = require('express')
const users = require('./users')
const posts = require('./posts')
const verify = require('./verifyToken')
const router = express.Router()

router.use('/user', users)
router.use(verify)
router.use('/post', posts)


module.exports = router

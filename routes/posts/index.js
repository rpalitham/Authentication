const express = require('express')
const router = express.Router()

const createPosts = require('./createPosts')
const getPosts = require('./getPosts')


router.post('/',createPosts)

router.get('/',getPosts)

module.exports = router

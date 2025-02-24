const express = require('express')
const { getInstagramFeed } = require('../controllers/instagramController')

const router = express.Router()

// Route for getting Instagram Feed
router.get('/feed', getInstagramFeed)

module.exports = router

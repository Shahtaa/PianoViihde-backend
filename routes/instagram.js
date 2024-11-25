const express = require('express')
const { getInstagramFeed } = require('../controllers/instagramController')

const router = express.Router()

// Маршрут для получения Instagram Feed
router.get('/feed', getInstagramFeed)

module.exports = router

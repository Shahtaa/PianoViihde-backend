// routes/instagram.js
const express = require('express');
const { getInstagramFeed } = require('../controllers/instagramController');
const router = express.Router();

router.get('/feed', getInstagramFeed); // 👈 Только /feed

module.exports = router;
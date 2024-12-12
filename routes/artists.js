const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistsController')

// Route: Get all artists
router.get('/', artistController.getAllArtists)

// Route: Get a single artist by ID
router.get('/:id', artistController.getArtistById)

module.exports = router
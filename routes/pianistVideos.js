const express = require('express')
const router = express.Router()
const {
  getVideosByPianistId,
  addVideoForPianist,
  deleteVideo,
} = require('../controllers/pianistVideosController')

// Get videos for a specific pianist
router.get('/:pianist_id', getVideosByPianistId)

// Add a video for a pianist
router.post('/', addVideoForPianist)

// Delete a video by ID
router.delete('/:id', deleteVideo)

module.exports = router

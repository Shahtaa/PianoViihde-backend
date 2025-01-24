const express = require('express')
const router = express.Router()
const {
  getVideosByPianistId,
  addVideoForPianist,
  deleteVideo,
} = require('../controllers/pianistVideosController')

// Получить видео для конкретного пианиста
router.get('/:pianist_id', getVideosByPianistId)

// Добавить видео для пианиста
router.post('/', addVideoForPianist)

// Удалить видео по ID
router.delete('/:id', deleteVideo)

module.exports = router

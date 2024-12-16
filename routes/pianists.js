const express = require('express');
const router = express.Router();
const {
  getAllPianists,
  getPianistById,
} = require('../controllers/pianistsController')

// Маршрут для получения всех пианистов
router.get('/', getAllPianists);

// Маршрут для получения пианиста по ID
router.get('/:id', getPianistById);

module.exports = router

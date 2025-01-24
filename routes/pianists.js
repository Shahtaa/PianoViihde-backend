const express = require('express');
const router = express.Router();
const {
  getAllPianists,
  getPianistById,
  createPianist,  // Импортируем метод для создания пианиста
} = require('../controllers/pianistsController')

// Маршрут для получения всех пианистов
router.get('/', getAllPianists);

// Маршрут для получения пианиста по ID
router.get('/:id', getPianistById);

// Маршрут для создания нового пианиста
router.post('/', createPianist);  // Новый маршрут для создания пианиста

module.exports = router;

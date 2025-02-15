const express = require('express');
const router = express.Router();
const { getAllReviews } = require('../controllers/reviewsController'); // Подключаем контроллер

// Маршрут для получения всех отзывов
router.get('/', getAllReviews);

module.exports = router;

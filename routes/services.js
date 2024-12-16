const express = require('express')
const router = express.Router()
const servicesController = require('../controllers/servicesController')

// Роуты для получения данных
router.get('/', servicesController.getAllServices) // Получить все услуги
router.get('/:id', servicesController.getServiceById) // Получить услугу по ID

module.exports = router

const express = require('express')
const router = express.Router()
const servicesController = require('../controllers/servicesController')

// Routes for retrieving data
router.get('/', servicesController.getAllServices) // Get all services
router.get('/:id', servicesController.getServiceById) // Get service by ID

module.exports = router

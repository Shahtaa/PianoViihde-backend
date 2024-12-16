// gigs.js (Express Router)
const express = require('express');
const router = express.Router();
const { getGigs } = require('../controllers/gigsController') // Подключаем контроллер

// Route to get gigs with pagination (limit & offset)
router.get('/', getGigs)

module.exports = router

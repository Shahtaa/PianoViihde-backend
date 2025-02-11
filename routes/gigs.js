// gigs.js (Express Router)
const express = require('express');
const router = express.Router();
const { getGigs, getConcertCount } = require('../controllers/gigsController'); // Подключаем контроллер

// Route to get gigs with pagination (limit & offset)
router.get('/', getGigs);

// Route to get the count of all concerts
router.get('/concert-count', getConcertCount);

module.exports = router;

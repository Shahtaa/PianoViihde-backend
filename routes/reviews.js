const express = require('express');
const router = express.Router();
const { getAllReviews } = require('../controllers/reviewsController'); // Connecting controller

// Route for getting all reviews
router.get('/', getAllReviews);

module.exports = router;

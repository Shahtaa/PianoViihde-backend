const express = require('express');
const router = express.Router();
const {
  getAllPianists,
  getPianistById,
  createPianist,  // Import the method for creating a pianis
} = require('../controllers/pianistsController')

// Route for getting all pianists
router.get('/', getAllPianists);

// Route for retrieving a pianist by ID
router.get('/:id', getPianistById);

// Route for creating a new pianist
router.post('/', createPianist);  // New route for creating a pianist

module.exports = router;

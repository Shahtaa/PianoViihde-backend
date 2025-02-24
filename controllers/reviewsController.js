const db = require('../db'); // Connecting to MySQL database

// Function to getting all reviews
const getAllReviews = async (req, res) => {
  try {
    const [reviews] = await db.query(
      'SELECT id, reviewer_name, review_title, review_body, date FROM reviews'
    );
    res.json({ data: reviews });
  } catch (error) {
    console.error('Ошибка при получении отзывов:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = { getAllReviews };

const db = require('../db'); // Connecting to MySQL database

// Function to get all reviews
const getAllReviews = async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection(); // Open connection to the database

    const [reviews] = await connection.query(
      'SELECT id, reviewer_name, review_title, review_body, date FROM reviews'
    );
    
    res.json({ data: reviews });  // Sending the reviews data as a response
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ message: 'Server error' });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
};

module.exports = { getAllReviews };

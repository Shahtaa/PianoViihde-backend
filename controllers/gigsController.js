// gigsController.js
const db = require('../db'); // Connecting to the database

// Get concerts with pagination (limit и offset)
const getGigs = async (req, res) => {
  const { limit = 5, offset = 0 } = req.query; // Default limit is 5, offset is 0

  try {
    const [rows] = await db.query('SELECT * FROM gigs');

    //  Formatting the date before sending, removing the time
    const formattedGigs = rows.map((gig) => {
      return {
        ...gig,
        date: new Date(gig.date).toLocaleDateString('en-GB'), // Converting the date to the "DD/MM/YYYY" format
      };
    });

    res.json(formattedGigs);
  } catch (error) {
    console.error('Error fetching gigs:', error.message);
    res.status(500).json({ message: 'Failed to fetch gigs' });
  }
};

// New method to get the total number of concerts
const getConcertCount = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT COUNT(*) AS count FROM gigs');
    res.json({ count: rows[0].count }); // Returning the number of concerts
  } catch (error) {
    console.error('Error fetching concert count:', error.message);
    res.status(500).json({ message: 'Failed to fetch concert count' });
  }
};

module.exports = { getGigs, getConcertCount };

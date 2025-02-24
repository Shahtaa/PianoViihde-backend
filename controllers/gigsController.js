const db = require('../db'); // Connecting to the database

// Get concerts with pagination (limit and offset)
const getGigs = async (req, res) => {
  const { limit = 5, offset = 0 } = req.query; // Default limit is 5, offset is 0

  let connection;
  try {
    connection = await db.getConnection(); // Get a connection from the pool
    // Query to get all gigs
    const [rows] = await connection.query('SELECT * FROM gigs');

    // Formatting the date before sending, removing the time
    const formattedGigs = rows.map((gig) => {
      return {
        ...gig,
        date: new Date(gig.date).toLocaleDateString('en-GB'), // Converting the date to the "DD/MM/YYYY" format
      };
    });

    res.json(formattedGigs); // Sending the formatted gigs data as response
  } catch (error) {
    console.error('Error fetching gigs:', error.message);
    res.status(500).json({ message: 'Failed to fetch gigs' });
  } finally {
    if (connection) connection.release(); // Release the connection back to the pool
  }
};

// New method to get the total number of concerts
const getConcertCount = async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection(); // Get a connection from the pool
    // Query to get the total count of concerts
    const [rows] = await connection.query('SELECT COUNT(*) AS count FROM gigs');
    res.json({ count: rows[0].count }); // Returning the number of concerts
  } catch (error) {
    console.error('Error fetching concert count:', error.message);
    res.status(500).json({ message: 'Failed to fetch concert count' });
  } finally {
    if (connection) connection.release(); // Release the connection back to the pool
  }
};

module.exports = { getGigs, getConcertCount };

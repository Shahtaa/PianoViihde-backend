const db = require('../db'); // Connecting to the database

// Get all pianists
const getAllPianists = async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection(); // Ensure connection is opened
    const [rows] = await connection.query('SELECT * FROM pianists');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching pianists:', error.message);
    res.status(500).json({ message: 'Failed to fetch pianists' });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
};

// Get a pianist by ID
const getPianistById = async (req, res) => {
  let connection;
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid pianist ID' });
  }

  try {
    connection = await db.getConnection(); // Ensure connection is opened
    const [pianistRows] = await connection.query(
      `SELECT 
        pianists.id, 
        pianists.name, 
        pianists.description, 
        pianists.imageUrl, 
        pianists.moreInfoUrl,
	pianists.image, 
        COALESCE(JSON_ARRAYAGG(pianist_videos.videoUrl), '[]') AS videos
      FROM 
        pianists
      LEFT JOIN 
        pianist_videos ON pianists.id = pianist_videos.pianist_id
      WHERE 
        pianists.id = ?
      GROUP BY 
        pianists.id, pianists.name, pianists.description, pianists.imageUrl, pianists.moreInfoUrl, pianists.image`,
      [id]
    );

    if (pianistRows.length === 0) {
      return res.status(404).json({ message: 'Pianist not found' });
    }

    const pianist = pianistRows[0];
    // Parsing videos since JSON_ARRAYAGG returns a string
    pianist.videos = JSON.parse(pianist.videos || '[]');
    res.json(pianist);
  } catch (error) {
    console.error('Error fetching pianist by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch pianist', error: error.message });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
};

// Create a new pianist
const createPianist = async (req, res) => {
  let connection;
  const { name, description, imageUrl, moreInfoUrl, videos } = req.body;

  // Checking for required fields
  if (!name || !description || !imageUrl) {
    return res.status(400).json({ message: 'Name, description, and imageUrl are required' });
  }

  try {
    connection = await db.getConnection(); // Ensure connection is opened
    // Inserting a new pianist into the pianists table (without the videos field)
    const [result] = await connection.query(
      'INSERT INTO pianists (name, description, imageUrl, moreInfoUrl) VALUES (?, ?, ?, ?)',
      [name, description, imageUrl, moreInfoUrl]
    );

    const pianistId = result.insertId; // Getting the ID of the new pianist

    // Checking for the presence of videos before map()
    if (Array.isArray(videos) && videos.length > 0) {
      // Adding a video to the pianist_videos table
      const videoPromises = videos.map(videoUrl => {
        return connection.query(
          'INSERT INTO pianist_videos (pianist_id, videoUrl) VALUES (?, ?)',
          [pianistId, videoUrl]
        );
      });

      // Waiting for all video insert queries to complete
      await Promise.all(videoPromises);
      console.log('Videos added successfully for pianist:', pianistId);
    }

    // Response with successful pianist creation
    res.status(201).json({ message: 'Pianist created successfully', pianistId });
  } catch (error) {
    console.error('Error creating pianist:', error.message);
    res.status(500).json({ message: 'Failed to create pianist' });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
};

module.exports = {
  getAllPianists,
  getPianistById,
  createPianist,
};

const db = require('../db'); // Connecting to the database

// Get all pianists  
const getAllPianists = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM pianists');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching pianists:', error.message);
    res.status(500).json({ message: 'Failed to fetch pianists' });
  }
};

// Get a pianist by ID
const getPianistById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid pianist ID' });
  }

  try {
    const [pianistRows] = await db.query(
      `SELECT 
        pianists.id, 
        pianists.name, 
        pianists.description, 
        pianists.imageUrl, 
        pianists.moreInfoUrl, 
        COALESCE(JSON_ARRAYAGG(pianist_videos.videoUrl), '[]') AS videos
      FROM 
        pianists
      LEFT JOIN 
        pianist_videos ON pianists.id = pianist_videos.pianist_id
      WHERE 
        pianists.id = ?
      GROUP BY 
        pianists.id, pianists.name, pianists.description, pianists.imageUrl, pianists.moreInfoUrl`,
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
  }
};

// Create a new pianist
const createPianist = async (req, res) => {
  const { name, description, imageUrl, moreInfoUrl, videos } = req.body;

 // Checking for required fields
  if (!name || !description || !imageUrl) {
    return res.status(400).json({ message: 'Name, description, and imageUrl are required' });
  }

  try {
    // Inserting a new pianist into the pianists table (without the videos field)
    const [result] = await db.query(
      'INSERT INTO pianists (name, description, imageUrl, moreInfoUrl) VALUES (?, ?, ?, ?)',
      [name, description, imageUrl, moreInfoUrl]
    );

    const pianistId = result.insertId; // Getting the ID of the new pianist

    // Checking for the presence of videos before map()
    if (Array.isArray(videos) && videos.length > 0) {
      // Adding a video to the pianist_videos table
      const videoPromises = videos.map(videoUrl => {
        return db.query(
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
  }
};

module.exports = {
  getAllPianists,
  getPianistById,
  createPianist,
};

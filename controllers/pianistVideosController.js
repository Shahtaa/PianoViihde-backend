const db = require('../db'); // Connecting to the database

// Get all videos for a specific pianist
const getVideosByPianistId = async (req, res) => {
  const pianist_id = parseInt(req.params.pianistId, 10);  
  if (isNaN(pianist_id)) {  // Checking that a valid ID is provided
    return res.status(400).json({ message: 'Invalid pianist ID' });
  }

  let connection;
  try {
    connection = await db.getConnection(); // Open connection to the database
    const [videoRows] = await connection.query(
      'SELECT id, videoUrl FROM pianist_videos WHERE pianist_id = ?',  // Using pianist_id in the query
      [pianist_id]  // Passing pianist_id to search for videos
    );

    if (videoRows.length === 0) {
      return res.status(404).json({ message: 'No videos found for this pianist' });
    }

    res.json(videoRows);  // Returning the found videos
  } catch (error) {
    console.error('Error fetching videos by pianist ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch videos' });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
}

// Add a new video for a pianist
const addVideoForPianist = async (req, res) => {
  const { pianist_id, videoUrl } = req.body;  // Retrieving data from the request body

  // Checking for required fields
  if (!videoUrl || !pianist_id) {
    return res.status(400).json({ message: 'Pianist ID and Video URL are required' });
  }

  let connection;
  try {
    connection = await db.getConnection(); // Open connection to the database

    // Checking if the pianist exists in the database
    const [pianistRows] = await connection.query('SELECT id FROM pianists WHERE id = ?', [pianist_id]);
    if (pianistRows.length === 0) {
      return res.status(404).json({ message: 'Pianist not found' });
    }

    // Adding a video for the pianist
    const result = await connection.query(
      'INSERT INTO pianist_videos (pianist_id, videoUrl) VALUES (?, ?)',  // Inserting data into the table
      [pianist_id, videoUrl]
    );

    res.status(201).json({ message: 'Video added successfully', videoId: result.insertId });
  } catch (error) {
    console.error('Error adding video for pianist:', error.message);
    res.status(500).json({ message: 'Failed to add video' });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
}

// Delete video by ID
const deleteVideo = async (req, res) => {
  const videoId = parseInt(req.params.id, 10);  // Getting the video ID from the request parameters
  if (isNaN(videoId)) {
    return res.status(400).json({ message: 'Invalid video ID' });
  }

  let connection;
  try {
    connection = await db.getConnection(); // Open connection to the database

    // Deleting the video from the database
    const result = await connection.query('DELETE FROM pianist_videos WHERE id = ?', [videoId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.json({ message: 'Video deleted successfully' });  // Returning a success message
  } catch (error) {
    console.error('Error deleting video:', error.message);
    res.status(500).json({ message: 'Failed to delete video' });
  } finally {
    if (connection) connection.release(); // Ensure connection is released in all cases
  }
}

module.exports = {
  getVideosByPianistId,
  addVideoForPianist,
  deleteVideo,
}

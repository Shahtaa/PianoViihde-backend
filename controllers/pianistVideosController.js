const db = require('../db')

// Get all videos for a specific pianist
const getVideosByPianistId = async (req, res) => {
  const pianist_id = parseInt(req.params.pianistId, 10)  
  if (isNaN(pianist_id)) {  // Checking that a valid ID is provided
    return res.status(400).json({ message: 'Invalid pianist ID' })
  }

  try {
    const [videoRows] = await db.query(
      'SELECT id, videoUrl FROM pianist_videos WHERE pianist_id = ?',  // Using pianist_id in the query
      [pianist_id]  // Passing pianist_id to search for videos
    )

    if (videoRows.length === 0) {
      return res.status(404).json({ message: 'No videos found for this pianist' })
    }

    res.json(videoRows)  // Returning the found videos
  } catch (error) {
    console.error('Error fetching videos by pianist ID:', error.message)
    res.status(500).json({ message: 'Failed to fetch videos' })
  }
}

// Add a new video for a pianist
const addVideoForPianist = async (req, res) => {
  const { pianist_id, videoUrl } = req.body  // Retrieving data from the request body

  // Checking for required fields
  if (!videoUrl || !pianist_id) {
    return res.status(400).json({ message: 'Pianist ID and Video URL are required' })
  }

  try {
    // Checking if the pianist exists in the database
    const [pianistRows] = await db.query('SELECT id FROM pianists WHERE id = ?', [pianist_id])
    if (pianistRows.length === 0) {
      return res.status(404).json({ message: 'Pianist not found' })
    }

    // Adding a video for the pianist
    const result = await db.query(
      'INSERT INTO pianist_videos (pianist_id, videoUrl) VALUES (?, ?)',  // Вставляем данные в таблицу
      [pianist_id, videoUrl]
    )

    res.status(201).json({ message: 'Video added successfully', videoId: result.insertId })
  } catch (error) {
    console.error('Error adding video for pianist:', error.message)
    res.status(500).json({ message: 'Failed to add video' })
  }
}

// Delete video by ID
const deleteVideo = async (req, res) => {
  const videoId = parseInt(req.params.id, 10)  // Getting the video ID from the request parameters
  if (isNaN(videoId)) {
    return res.status(400).json({ message: 'Invalid video ID' })
  }

  try {
    // Deleting the video from the database
    const result = await db.query('DELETE FROM pianist_videos WHERE id = ?', [videoId])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Video not found' })
    }

    res.json({ message: 'Video deleted successfully' })  // Returning a success message
  } catch (error) {
    console.error('Error deleting video:', error.message)
    res.status(500).json({ message: 'Failed to delete video' })
  }
}

module.exports = {
  getVideosByPianistId,
  addVideoForPianist,
  deleteVideo,
}

const db = require('../db') // Подключение к базе данных

// Получить всех артистов с видео
const getAllArtists = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM artists')
    const artistsWithVideos = await Promise.all(
      rows.map(async (artist) => {
        const [videoRows] = await db.query(
          'SELECT videoUrl FROM artist_videos WHERE artist_id = ?',
          [artist.id]
        )
        artist.videos = videoRows.map((video) => video.videoUrl)
        return artist
      })
    )
    res.json(artistsWithVideos)
  } catch (error) {
    console.error('Error fetching artists:', error.message)
    res.status(500).json({ message: 'Failed to fetch artists' })
  }
}

// Получить артиста по ID с видео
const getArtistById = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid artist ID' })
  }

  try {
    // Получение информации об артисте
    const [artistRows] = await db.query('SELECT * FROM artists WHERE id = ?', [
      id,
    ])
    if (artistRows.length === 0) {
      return res.status(404).json({ message: 'Artist not found' })
    }

    // Получение видео для артиста
    const [videoRows] = await db.query(
      'SELECT videoUrl FROM artist_videos WHERE artist_id = ?',
      [id]
    )
    const artist = artistRows[0]
    artist.videos = videoRows.map((video) => video.videoUrl)

    res.json(artist)
  } catch (error) {
    console.error('Error fetching artist by ID:', error.message)
    res.status(500).json({ message: 'Failed to fetch artist' })
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
}

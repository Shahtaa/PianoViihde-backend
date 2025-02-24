const db = require('../db')

// Получить всех артистов с видео
const getAllArtists = async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection(); // Берем соединение из пула
    const [rows] = await connection.query('SELECT * FROM artists');

    const artistsWithVideos = await Promise.all(
      rows.map(async (artist) => {
        const [videoRows] = await connection.query(
          'SELECT videoUrl FROM artist_videos WHERE artist_id = ?',
          [artist.id]
        );
        artist.videos = videoRows.map((video) => video.videoUrl);
        return artist;
      })
    );
    
    res.json(artistsWithVideos);
  } catch (error) {
    console.error('Error fetching artists:', error.message);
    res.status(500).json({ message: 'Failed to fetch artists' });
  } finally {
    if (connection) connection.release(); // Освобождаем соединение
  }
}

// Получить артиста по ID с видео
const getArtistById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid artist ID' });
  }

  let connection;
  try {
    connection = await db.getConnection(); // Берем соединение из пула

    // Получаем информацию о артисте
    const [artistRows] = await connection.query('SELECT * FROM artists WHERE id = ?', [id]);
    if (artistRows.length === 0) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    // Получаем видео для артиста
    const [videoRows] = await connection.query(
      'SELECT videoUrl FROM artist_videos WHERE artist_id = ?',
      [id]
    );
    const artist = artistRows[0];
    artist.videos = videoRows.map((video) => video.videoUrl);

    res.json(artist);
  } catch (error) {
    console.error('Error fetching artist by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch artist' });
  } finally {
    if (connection) connection.release(); // Освобождаем соединение
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
}

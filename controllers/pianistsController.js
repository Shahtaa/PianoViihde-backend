const db = require('../db') // Подключение к базе данных

// Получить всех пианистов
const getAllPianists = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM pianists')
    res.json(rows)
  } catch (error) {
    console.error('Error fetching pianists:', error.message)
    res.status(500).json({ message: 'Failed to fetch pianists' })
  }
}

// Получить пианиста по ID
const getPianistById = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid pianist ID' })
  }

  try {
    // Получение информации о пианисте
    const [pianistRows] = await db.query(
      'SELECT id, name, description, imageUrl, moreInfoUrl, facebookUrl, instagramUrl FROM pianists WHERE id = ?',
      [id]
    )
    if (pianistRows.length === 0) {
      return res.status(404).json({ message: 'Pianist not found' })
    }

    // Получение связанных видео
    const [videoRows] = await db.query(
      'SELECT videoUrl FROM pianist_videos WHERE pianist_id = ?',
      [id]
    )

    // Объединение данных
    const pianist = pianistRows[0]
    pianist.videos = videoRows.map((video) => video.videoUrl)

    res.json(pianist)
  } catch (error) {
    console.error('Error fetching pianist by ID:', error.message)
    res.status(500).json({ message: 'Failed to fetch pianist' })
  }
}

module.exports = {
  getAllPianists,
  getPianistById,
}

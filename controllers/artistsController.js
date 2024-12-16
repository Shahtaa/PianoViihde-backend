const db = require('../db') // Подключаем файл с настройками базы данных

// Controller: Get all artists from the database
const getAllArtists = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM artists')
    res.json(rows)
  } catch (error) {
    console.error('Error fetching artists:', error.message, error.stack)
    res.status(500).json({ message: 'Failed to fetch artists' })
  }
}

// Controller: Get a single artist by ID
const getArtistById = async (req, res) => {
  const id = parseInt(req.params.id, 10) // Валидация ID
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid artist ID' })
  }

  try {
    const [rows] = await db.query('SELECT * FROM artists WHERE id = ?', [id])
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Artist not found' })
    }
    res.json(rows[0])
  } catch (error) {
    console.error('Error fetching artist by ID:', error.message, error.stack)
    res.status(500).json({ message: 'Failed to fetch artist' })
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
}

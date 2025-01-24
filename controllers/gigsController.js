// gigsController.js
const db = require('../db') // Подключаем базу данных

// Получить концерты с пагинацией (limit и offset)
const getGigs = async (req, res) => {
  const { limit = 5, offset = 0 } = req.query // Default limit is 5, offset is 0

  try {
    const [rows] = await db.query('SELECT * FROM gigs');

    // Форматируем дату перед отправкой, убираем время
    const formattedGigs = rows.map((gig) => {
      return {
        ...gig,
        date: new Date(gig.date).toLocaleDateString('en-GB'), // Преобразуем дату в формат "DD/MM/YYYY"
      }
    })

    res.json(formattedGigs)
  } catch (error) {
    console.error('Error fetching gigs:', error.message)
    res.status(500).json({ message: 'Failed to fetch gigs' })
  }
}

module.exports = { getGigs }

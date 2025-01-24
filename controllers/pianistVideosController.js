const db = require('../db')

// Получить все видео для конкретного пианиста
const getVideosByPianistId = async (req, res) => {
  const pianist_id = parseInt(req.params.pianistId, 10)  // Используем pianist_id
  if (isNaN(pianist_id)) {  // Проверяем, что передан корректный ID
    return res.status(400).json({ message: 'Invalid pianist ID' })
  }

  try {
    const [videoRows] = await db.query(
      'SELECT id, videoUrl FROM pianist_videos WHERE pianist_id = ?',  // Используем pianist_id в запросе
      [pianist_id]  // Передаем pianist_id для поиска видео
    )

    if (videoRows.length === 0) {
      return res.status(404).json({ message: 'No videos found for this pianist' })
    }

    res.json(videoRows)  // Возвращаем найденные видео
  } catch (error) {
    console.error('Error fetching videos by pianist ID:', error.message)
    res.status(500).json({ message: 'Failed to fetch videos' })
  }
}

// Добавить новое видео для пианиста
const addVideoForPianist = async (req, res) => {
  const { pianist_id, videoUrl } = req.body  // Получаем данные из тела запроса

  // Проверка на обязательные поля
  if (!videoUrl || !pianist_id) {
    return res.status(400).json({ message: 'Pianist ID and Video URL are required' })
  }

  try {
    // Проверяем, существует ли пианист в базе
    const [pianistRows] = await db.query('SELECT id FROM pianists WHERE id = ?', [pianist_id])
    if (pianistRows.length === 0) {
      return res.status(404).json({ message: 'Pianist not found' })
    }

    // Добавляем видео для пианиста
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

// Удалить видео по ID
const deleteVideo = async (req, res) => {
  const videoId = parseInt(req.params.id, 10)  // Получаем ID видео из параметров запроса
  if (isNaN(videoId)) {
    return res.status(400).json({ message: 'Invalid video ID' })
  }

  try {
    // Удаляем видео из базы
    const result = await db.query('DELETE FROM pianist_videos WHERE id = ?', [videoId])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Video not found' })
    }

    res.json({ message: 'Video deleted successfully' })  // Возвращаем успешное сообщение
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

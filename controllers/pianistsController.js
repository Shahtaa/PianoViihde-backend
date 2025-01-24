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
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid pianist ID' });
  }

  try {
    const [pianistRows] = await db.query(
      'SELECT id, name, description, imageUrl, moreInfoUrl, videos FROM pianists WHERE id = ?',
      [id]
    );

    if (pianistRows.length === 0) {
      return res.status(404).json({ message: 'Pianist not found' });
    }

    const pianist = pianistRows[0];

    // Проверка, является ли videos строкой
    if (typeof pianist.videos === 'string') {
      // Если это строка, разделяем её на массив
      pianist.videos = pianist.videos.split(',');
    } else if (Array.isArray(pianist.videos)) {
      // Если это массив, ничего не меняем
      pianist.videos = pianist.videos.map(video => video.videoUrl || video); // Если это массив объектов, извлекаем URL
    }

    res.json(pianist);
  } catch (error) {
    console.error('Error fetching pianist by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch pianist', error: error.message });
  }
};





// Создание нового пианиста
const createPianist = async (req, res) => {
  const { name, description, imageUrl, moreInfoUrl, videos } = req.body;

  if (!name || !description || !imageUrl) {
    return res.status(400).json({ message: 'Name, description, and imageUrl are required' });
  }

  try {
    // Если видео передается как массив, преобразуем его в строку с разделением запятыми
    const videoUrls = Array.isArray(videos) ? videos.join(',') : videos;

    // Вставка нового пианиста в таблицу
    const [result] = await db.query(
      'INSERT INTO pianists (name, description, imageUrl, moreInfoUrl, videos) VALUES (?, ?, ?, ?, ?)',
      [name, description, imageUrl, moreInfoUrl, videoUrls] // Сохраняем видео как строку
    );

    const pianistId = result.insertId; // Получаем ID нового пианиста

    // Если есть видео, добавляем их в таблицу pianist_videos
    if (videos) {
      const videoPromises = videoUrls.split(',').map(videoUrl => {
        return db.query(
          'INSERT INTO pianist_videos (pianist_id, videoUrl) VALUES (?, ?)',
          [pianistId, videoUrl]
        );
      });

      // Дожидаемся завершения всех запросов
      await Promise.all(videoPromises);
    }

    res.status(201).json({ message: 'Pianist created successfully', pianistId });
  } catch (error) {
    console.error('Error creating pianist:', error.message);
    res.status(500).json({ message: 'Failed to create pianist' });
  }
};


module.exports = {
  getAllPianists,
  getPianistById,
  createPianist,  // Добавляем новый метод для экспорта
}

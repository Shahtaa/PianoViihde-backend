const db = require('../db'); // Подключение к базе данных

// Получить всех пианистов
const getAllPianists = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM pianists');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching pianists:', error.message);
    res.status(500).json({ message: 'Failed to fetch pianists' });
  }
};

// Получить пианиста по ID
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

    // ✅ Парсим `videos`, так как JSON_ARRAYAGG возвращает строку
    pianist.videos = JSON.parse(pianist.videos || '[]');

    res.json(pianist);
  } catch (error) {
    console.error('Error fetching pianist by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch pianist', error: error.message });
  }
};

// Создать нового пианиста
const createPianist = async (req, res) => {
  const { name, description, imageUrl, moreInfoUrl, videos } = req.body;

  // Проверка обязательных полей
  if (!name || !description || !imageUrl) {
    return res.status(400).json({ message: 'Name, description, and imageUrl are required' });
  }

  try {
    // Вставка нового пианиста в таблицу pianists (без поля videos)
    const [result] = await db.query(
      'INSERT INTO pianists (name, description, imageUrl, moreInfoUrl) VALUES (?, ?, ?, ?)',
      [name, description, imageUrl, moreInfoUrl]
    );

    const pianistId = result.insertId; // Получаем ID нового пианиста

    // ✅ Проверка наличия видео перед `map()`
    if (Array.isArray(videos) && videos.length > 0) {
      // Добавление видео в таблицу pianist_videos
      const videoPromises = videos.map(videoUrl => {
        return db.query(
          'INSERT INTO pianist_videos (pianist_id, videoUrl) VALUES (?, ?)',
          [pianistId, videoUrl]
        );
      });

      // Дожидаемся завершения всех запросов на добавление видео
      await Promise.all(videoPromises);
      console.log('Videos added successfully for pianist:', pianistId);
    }

    // Ответ с успешным созданием пианиста
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

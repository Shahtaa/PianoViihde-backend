const db = require('../db'); // Подключение к базе данных

// Get all services
const getAllServices = async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection(); // Открываем соединение с базой данных

    const [services] = await connection.query('SELECT * FROM services');
    res.json(services);  // Отправляем список услуг как ответ
  } catch (error) {
    console.error('Error fetching services:', error.message);
    res.status(500).json({ message: 'Failed to fetch services' });
  } finally {
    if (connection) connection.release(); // Освобождаем соединение в любом случае
  }
}

// Get service by ID
const getServiceById = async (req, res) => {
  const serviceId = parseInt(req.params.id, 10);

  if (isNaN(serviceId)) {
    return res.status(400).json({ message: 'Invalid service ID' });
  }

  let connection;
  try {
    connection = await db.getConnection(); // Открываем соединение с базой данных

    // Получаем услугу
    const [services] = await connection.query('SELECT * FROM services WHERE id = ?', [
      serviceId,
    ]);

    if (services.length === 0) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const service = services[0];

    // Получаем детали услуги
    const [details] = await connection.query(
      'SELECT * FROM service_details WHERE service_id = ?',
      [serviceId]
    );

    service.details = details; // Добавляем детали к услуге
    res.json(service);
  } catch (error) {
    console.error('Error fetching service by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch service' });
  } finally {
    if (connection) connection.release(); // Освобождаем соединение в любом случае
  }
}

module.exports = {
  getAllServices,
  getServiceById,
}

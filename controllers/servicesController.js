const db = require('../db') // Подключение к базе данных

// Get all services
const getAllServices = async (req, res) => {
  try {
    const [services] = await db.query('SELECT * FROM services')
    res.json(services)
  } catch (error) {
    console.error('Error fetching services:', error.message)
    res.status(500).json({ message: 'Failed to fetch services' })
  }
}

// Get service by ID
const getServiceById = async (req, res) => {
  const serviceId = parseInt(req.params.id, 10)

  if (isNaN(serviceId)) {
    return res.status(400).json({ message: 'Invalid service ID' })
  }

  try {
    // Get service
    const [services] = await db.query('SELECT * FROM services WHERE id = ?', [
      serviceId,
    ])

    if (services.length === 0) {
      return res.status(404).json({ message: 'Service not found' })
    }

    const service = services[0]

    // Get service details
    const [details] = await db.query(
      'SELECT * FROM service_details WHERE service_id = ?',
      [serviceId]
    )

    service.details = details // Добавить детали к услуге
    res.json(service)
  } catch (error) {
    console.error('Error fetching service by ID:', error.message)
    res.status(500).json({ message: 'Failed to fetch service' })
  }
}

module.exports = {
  getAllServices,
  getServiceById,
}

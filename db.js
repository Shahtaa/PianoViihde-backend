const mysql = require('mysql2')

// Настройки подключения к базе данных
const pool = mysql.createPool({
  host: 'localhost', // Адрес сервера базы данных
  user: 'root', // Пользователь базы данных
  database: 'pianoviihde', // Имя базы данных
})

// Экспортируем объект pool для выполнения запросов
module.exports = pool.promise()

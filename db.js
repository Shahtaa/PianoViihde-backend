const mysql = require('mysql2')

// DB configuration
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'pianoviihde',
})


module.exports = pool.promise()

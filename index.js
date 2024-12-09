require('dotenv').config();
const express = require('express');
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

const servicesRouter = require('./routes/services')
const artistsRouter = require('./routes/artists')
const pianistsRouter = require('./routes/pianists')
const instagramRouter = require('./routes/instagram')
const gigsRouter = require('./routes/gigs') // Import the gigs router

const app = express() // Переместите инициализацию app сюда
const port = 3000

// Middleware
app.use(morgan('dev')) // Logs all incoming requests
app.use(cors()) // Enable CORS for all routes
app.use(express.json()) // Parse incoming JSON requests
console.log(path.join(__dirname, '../PianoViihdeProggis/public/images'))
app.use(
  '/images',
  express.static(path.join(__dirname, '../PianoViihde/public/images'))
)

// Use the services routes
app.use('/api/services', servicesRouter)

// Use the artists routes
app.use('/api/artists', artistsRouter)

// Use the pianists routes
app.use(pianistsRouter)

// Use the Instagram routes
app.use('/api/instagram', instagramRouter)

// Use the gigs routes
app.use('/api/gigs', gigsRouter) // Add the gigs router

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the PianoViihde Backend!')
})

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack) // Logs the error stack to the console
  res.status(500).json({ message: 'Something went wrong' })
})

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

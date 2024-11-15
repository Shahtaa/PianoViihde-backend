const express = require('express');
const cors = require('cors');
const servicesRouter = require('./routes/services');  // Import the services router
const artistsRouter = require('./routes/artists');    // Import the artists router
const pianistsRouter = require('./routes/pianists');  // Import the pianists router

const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse incoming JSON requests

// Use the routers for different API endpoints
app.use('/api/services', servicesRouter);  // Services API
app.use('/api/artists', artistsRouter);    // Artists API
app.use('/api/pianists', pianistsRouter);  // Pianists API

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the PianoViihde Backend!');
});

// 404 handler for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);  // Logs the error stack to the console
    res.status(500).json({ message: 'Something went wrong' });
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
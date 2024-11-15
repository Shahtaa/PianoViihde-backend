const express = require('express');
const cors = require('cors');
const servicesRouter = require('./routes/services');  // Import the services router
const artistsRouter = require('./routes/artists');    // Import the artists router
const pianistsRouter = require('./routes/pianists');    // Import the pianists router (corrected)

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Use the services routes
app.use(servicesRouter);

// Use the artists routes
app.use(artistsRouter);

// Use the pianists routes (added)
app.use(pianistsRouter);  // The '/pianists' prefix is optional

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the PianoViihde Backend!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
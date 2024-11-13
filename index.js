// /Users/s2301506/Documents/PianoViihde-backend/index.js
const express = require('express');
const cors = require('cors');
const servicesRouter = require('./routes/services'); // Import the services router

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Use the services routes
app.use(servicesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the PianoViihde Backend!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// gigs.js (Express Router)
const express = require('express');
const router = express.Router();

// Mock data for gigs
const gigs = [
    { title: 'Ravintola Helsinki', date: '2024-12-25', location: 'Helsinki, Finland' },
    { title: 'Yritystilaisuus Espoo', date: '2024-12-30', location: 'Espoo, Finland' },
    { title: 'Uudenvuoden juhla', date: '2024-12-31', location: 'Tampere, Finland' },
    { title: 'Kesäjuhla', date: '2025-07-01', location: 'Turku, Finland' },
    { title: 'Festival Espoo', date: '2025-08-15', location: 'Espoo, Finland' },
    { title: 'Jazz Night', date: '2025-09-20', location: 'Helsinki, Finland' },
    { title: 'Private Event', date: '2025-10-05', location: 'Oulu, Finland' },
    { title: 'Christmas Party', date: '2025-12-24', location: 'Rovaniemi, Finland' }
];

// Route to get gigs with pagination (limit & offset)
router.get('/', (req, res) => {
    const { limit = 5, offset = 0 } = req.query; // Default limit is 5, offset is 0
    const pagedGigs = gigs.slice(offset, offset + limit); // Slicing the gigs array based on pagination parameters
    res.json(pagedGigs);
});

module.exports = router;
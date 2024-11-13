// /Users/s2301506/Documents/PianoViihde-backend/services.js
const express = require('express');
const router = express.Router();

// Mock data for services
const services = [
    {
        title: 'Livemusiikki ravintoloissa',
        description: 'Tarjoamme eläviä musiikkiesityksiä ravintoloissa ja muissa tiloissa, joissa tunnelma luodaan musiikin avulla.',
        imageUrl: 'https://via.placeholder.com/350x200',
        moreInfoUrl: '/services/livemusiikki-ravintoloissa',
    },
    {
        title: 'Yritystilaisuudet',
        description: 'Räätälöimme musiikkiesityksiä yritystilaisuuksiin, konferensseihin ja juhliin, jotka luovat mieleenpainuvia kokemuksia.',
        imageUrl: 'https://via.placeholder.com/350x200',
        moreInfoUrl: '/services/yritystilaisuudet',
    },
    {
        title: 'Taustamusiikkia tilaisuuksiin',
        description: 'Tarjoamme taustamusiikkia monenlaisiin tilaisuuksiin, kuten vastaanottoihin, kokouksiin ja juhlien tunnelman luomiseen.',
        imageUrl: 'https://via.placeholder.com/350x200',
        moreInfoUrl: '/services/taustamusiikkia-tilaisuuksiin',
    },
    {
        title: 'Häämusiikki',
        description: 'Erityisesti hääjuhliin tarjoamme kauniita musiikkiesityksiä, jotka tekevät päivästä unohtumattoman.',
        imageUrl: 'https://via.placeholder.com/350x200',
        moreInfoUrl: '/services/haamusiikki',
    },
    {
        title: 'Sävellyspalvelut',
        description: 'Tarjoamme sävellyspalveluja niin yksityisille kuin yrityksille – luomme musiikkia erilaisiin projekteihin ja tilaisuuksiin.',
        imageUrl: 'https://via.placeholder.com/350x200',
        moreInfoUrl: '/services/savellyspalvelut',
    },
];

// Define the route to get services
router.get('/api/services', (req, res) => {
    res.json(services);
});

module.exports = router;
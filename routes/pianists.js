const express = require('express');
const router = express.Router();

// Pianist data array
const pianists = [
    {
        name: 'Piia Kristiina',
        description: 'Klassiselta taustalta monipuoliseksi viihdepianistiksi kehittynyt. Keikkailee aktiivisesti Duo Primadonnien, Duo Songbirdsin ja muiden kanssa. Musiikillisesti Piia on omistautunut viihdepianon soitolle, jolle ei löydy rajoituksia.',
        imageUrl: '/images/pianist.jpg', // This can be a static asset or a URL
        moreInfoUrl: '/pianists/piia-kristiina',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Ruut',
        description: 'Ruut on soittanut klassista pianoa 19 vuotta Tampereen konservatoriossa. Hän soittaa tyylikästä kevyttä musiikkia, jatsahtavia viihdemusiikin klassikoita ja ikivihreitä.',
        imageUrl: '/images/pianist.jpg',
        moreInfoUrl: '/pianists/ruut',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Laura',
        description: 'Laura on musiikin ammattilainen, joka soittaa jazzia ja klassista musiikkia. Hän on myös musiikkiopiston rehtori ja esiintyy aktiivisesti sekä pianistin että viulistin rooleissa.',
        imageUrl: '/images/pianist.jpg',
        moreInfoUrl: '/pianists/laura',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Arto',
        description: 'Arto on romanttinen ja tunteikas pianisti, jonka soittotyyli on vaikuttunut Chopinista. Hänen musiikkinsa viehättää monia ja se sopii erinomaisesti solistin säestyksiksi tai ruokailun taustalle.',
        imageUrl: '/images/pianist.jpg',
        moreInfoUrl: '/pianists/arto',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Joonas',
        description: 'Joonas on monipuolinen freelance-muusikko, joka on erikoistunut viihdemusiikkiin ja jazziin. Hänen ohjelmistonsa kattaa laajan valikoiman musiikkityylejä, ja hän on soittanut monilla teatterilavoilla.',
        imageUrl: '/images/pianist.jpg',
        moreInfoUrl: '/pianists/joonas',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
];

// Define the route to get all pianists
router.get('/', (req, res) => {
    res.json(pianists);
});

module.exports = router;
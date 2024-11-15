// /Users/s2301506/Documents/PianoViihde-backend/artists.js
const express = require('express')
const router = express.Router()

// Mock data for artists
const artists = [
    {
        name: 'Anna Katariina',
        description: 'Lyhyt kuvaus Anna Katariinasta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/anna-katariina',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Duo Songbirds',
        description: 'Lyhyt kuvaus Duo Songbirdsistä.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/duo-songbirds',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Saksofonisti Anton Morozov',
        description: 'Lyhyt kuvaus Anton Morozovista.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/anton-morozov',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Tytti Koivunen',
        description: 'Lyhyt kuvaus Tytti Koivusesta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/tytti-koivunen',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Lotta Virkkunen',
        description: 'Lyhyt kuvaus Lotta Virkkusesta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/lotta-virkkunen',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Tanja Vähäsarja',
        description: 'Lyhyt kuvaus Tanja Vähäsarjasta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/tanja-vahasarja',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Juontaja Kimmo Oksanen',
        description: 'Lyhyt kuvaus Kimmo Oksasesta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/kimmo-oksanen',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Toni Jokiniitty',
        description: 'Lyhyt kuvaus Toni Jokiniitystä.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/toni-jokiniitty',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Joonas Eloranta',
        description: 'Lyhyt kuvaus Joonas Elorannasta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/joonas-eloranta',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'PUSHKIN Quintett',
        description: 'Lyhyt kuvaus PUSHKIN Quintetista.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/pushkin-quintett',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Night Shift',
        description: 'Lyhyt kuvaus Night Shiftistä.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/night-shift',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Henriikka Roo',
        description: 'Lyhyt kuvaus Henriikka Roosta.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/henriikka-roo',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
    {
        name: 'Tampereen Ukuleleorkesteri',
        description: 'Lyhyt kuvaus Tampereen Ukuleleorkesterista.',
        imageUrl: '/images/artists_jpg.jpg',
        moreInfoUrl: '/artists/tampereen-ukuleleorkesteri',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        youtubeUrl: 'https://youtube.com',
    },
]

// Define the route to get artists
router.get('/api/artists', (req, res) => {
    res.json(artists)
})

module.exports = router
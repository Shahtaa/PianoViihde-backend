const express = require('express');
const router = express.Router();

// Mock data for artists
const artists = [
  {
    id: 1,
    name: 'Anna Katariina',
    description: 'Lyhyt kuvaus Anna Katariinasta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 2,
    name: 'Duo Songbirds',
    description: 'Lyhyt kuvaus Duo Songbirdsistä.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 3,
    name: 'Saksofonisti Anton Morozov',
    description: 'Lyhyt kuvaus Anton Morozovista.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 4,
    name: 'Tytti Koivunen',
    description: 'Lyhyt kuvaus Tytti Koivusesta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 5,
    name: 'Lotta Virkkunen',
    description: 'Lyhyt kuvaus Lotta Virkkusesta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 6,
    name: 'Tanja Vähäsarja',
    description: 'Lyhyt kuvaus Tanja Vähäsarjasta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 7,
    name: 'Juontaja Kimmo Oksanen',
    description: 'Lyhyt kuvaus Kimmo Oksasesta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 8,
    name: 'Toni Jokiniitty',
    description: 'Lyhyt kuvaus Toni Jokiniitystä.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 9,
    name: 'Joonas Eloranta',
    description: 'Lyhyt kuvaus Joonas Elorannasta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 10,
    name: 'PUSHKIN Quintett',
    description: 'Lyhyt kuvaus PUSHKIN Quintetista.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 11,
    name: 'Night Shift',
    description: 'Lyhyt kuvaus Night Shiftistä.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 12,
    name: 'Henriikka Roo',
    description: 'Lyhyt kuvaus Henriikka Roosta.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
  {
    id: 13,
    name: 'Tampereen Ukuleleorkesteri',
    description: 'Lyhyt kuvaus Tampereen Ukuleleorkesterista.',
    imageUrl: '/images/artists_jpg.jpg',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    videos: [
      'https://www.youtube.com/embed/DCopcNpzc60',
      'https://www.youtube.com/embed/oGlDJ3GxvLc',
    ],
  },
]

// Define the route to get all artists
router.get('/', (req, res) => {
  res.json(artists)
})

// Define the route to get a single artist by ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  const artist = artists.find((a) => a.id === parseInt(id, 10))

  if (artist) {
    res.json(artist)
  } else {
    res.status(404).json({ message: 'Artist not found' })
  }
})

module.exports = router

const express = require('express')
const router = express.Router()

// Mock data for services
const services = [
  {
    id: 1,
    title: 'Livemusiikki ravintoloissa',
    description:
      'Tarjoamme eläviä musiikkiesityksiä ravintoloissa ja muissa tiloissa, joissa tunnelma luodaan musiikin avulla.',
    imageUrl: '/images/tilaisuus.jpg',
    details: [
      {
        heading: 'Pianomusikki ravintola Astorissa',
        text: `
          Perinteikkäässä Tampereen Keskustorin laidalla sijaitsevassa ravintola Astorissa on soinut livepiano jo kahdenkymmenen vuoden ajan! 
          Ohjelmatoimisto Piano & Viihde on järjestänyt Astoriin pianomusiikin vuodesta 2007. Taitava viihdepianisti viihdyttää ruokailijoita sekä baarin asiakkaita aina perjantaisin ja lauantaisin klo 17-21.

          Ravintolassa kuullaan vaihtuvilta viihdepianisteilta monipuolisesti kevyttä musiikkia jokaisen soittajan omalla persoonallisella tyylillä. 
          Pianistilta saa ja voi toivoa spontaanisti toivekappaleita illan aikana! Pianisti voi myös osallistua syntymäpäiväjuhliin tai muiden Astorissa vietettävien juhliin säestäjänä. 
          Astorin tilavasta ja tyylikkäästä Aleksi-salista löytyy myös akustinen piano, joten salin tilaisuuksiin voi myös tilata pianistin.
        `,
        imageUrl: '/images/livemusa1.webp',
      },
      {
        heading: 'Livemusiikki Paapan Kapakassa',
        text: `
          Paappa Music Bar tai tuttavallisemmin Paapan Kapakka tunnetaan ympäri Suomea livemusiikistaan, jota on tarjolla seitsämän iltaa viikossa! 
          Maanantaisin Paapassa viihdyttää usein viihdepianisti tai laulajapianisti. Soitto alkaa tuolloin klo 20. Tiistaisin lavalla nähdään esimerkiksi kitaraduo tai jazztrio. 
          Loppuviikkoa kohti bändin kokoonpano yleensä kasvaa ja jazzin lisäksi kuullaan myös bluesia tai svingiä. Paappa on keskeisen sijaintinsa lisäksi tullut tunnetuksi aina ilmaisesta sisäänpääsystään 
          sekä rennosta ilmapiiristä ja mukavasta palvelustaan!
        `,
        imageUrl: '/images/livemusa2.webp',
      },
    ],
  },
  {
    id: 2,
    title: 'Yritystilaisuudet',
    description:
      'Räätälöimme musiikkiesityksiä yritystilaisuuksiin, konferensseihin ja juhliin, jotka luovat mieleenpainuvia kokemuksia.',
    imageUrl: '/images/tilaisuus.jpg',
    details: [
      {
        heading: 'Yritystilaisuuden ohjelmisto',
        text: `
          Räätälöity ohjelmisto tekee yritystilaisuuksista unohtumattoman. Meidän kokeneet artistimme tuovat tunnelmaa niin pieniin kokouksiin kuin suuriin konferensseihin. 
          Esityksissä yhdistyy ammattimaisuus ja joustavuus, mikä takaa jokaiselle osallistujalle mieleenpainuvan kokemuksen.
        `,
        imageUrl: '/images/yritys_event.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Taustamusiikkia tilaisuuksiin',
    description:
      'Tarjoamme taustamusiikkia monenlaisiin tilaisuuksiin, kuten vastaanottoihin, kokouksiin ja juhlien tunnelman luomiseen.',
    imageUrl: '/images/tilaisuus.jpg',
    details: [
      {
        heading: 'Vastaanottojen taustamusiikki',
        text: `
          Etsitkö tunnelmallista taustamusiikkia, joka täydentää tapahtumasi luonteen? Meidän pianistit ja pienet yhtyeemme tarjoavat kevyttä ja tyylikästä musiikkia, joka sopii täydellisesti mihin tahansa tilaisuuteen.
        `,
        imageUrl: '/images/tausta_vastaanotto.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'Häämusiikki',
    description:
      'Erityisesti hääjuhliin tarjoamme kauniita musiikkiesityksiä, jotka tekevät päivästä unohtumattoman.',
    imageUrl: '/images/tilaisuus.jpg',
    details: [
      {
        heading: 'Häät seremoniassa',
        text: `
          Meidän häämusiikkipalvelumme kattaa kaiken morsiamen saapumisesta häävalssiin. Kauniit melodiat tekevät päivästänne erityisen.
        `,
        imageUrl: '/images/haat_seremonia.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Sävellyspalvelut',
    description:
      'Tarjoamme sävellyspalveluja niin yksityisille kuin yrityksille – luomme musiikkia erilaisiin projekteihin ja tilaisuuksiin.',
    imageUrl: '/images/tilaisuus.jpg',
    details: [
      {
        heading: 'Räätälöidyt sävellykset',
        text: `
          Tarjoamme yksilöllisesti räätälöityjä sävellyksiä, jotka tuovat ainutlaatuisen tunnelman mihin tahansa projektiin tai tilaisuuteen.
        `,
        imageUrl: '/images/savellys_räätälöity.jpg',
      },
    ],
  },
]

// Route to get all services
router.get('/', (req, res) => {
  res.json(services)
})

// Route to get a single service by ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  const service = services.find((s) => s.id === parseInt(id, 10))
  if (service) {
    res.json(service)
  } else {
    res.status(404).json({ message: 'Service not found' })
  }
})

module.exports = router

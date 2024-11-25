const axios = require('axios')

const ACCESS_TOKEN =
  'IGQWRNYlFBdE16dHZARVWdNUVlBNXl5eVQzMmkwRUEwcHp0RXpoT0VwTkpVWk5sR1dsaXdaaFF1Ukc1a2dGR3NnRkQ3amtqVlFtTGF1YkdqWnFHMHhaQWpLMUhUellMVnJyZA0ZAtd0ExcHRIdVV0MHRCRzBIbnQ4TmMZD' // Ваш токен Instagram

const getInstagramFeed = async (req, res) => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`
    )

    // Убедимся, что данные корректны
    const data = response.data.data.map((item) => ({
      id: item.id,
      caption: item.caption || 'No caption', // Если caption отсутствует
      media_url: item.media_url || '',
      thumbnail_url: item.thumbnail_url || item.media_url, // Если нет thumbnail, используем media_url
      permalink: item.permalink || '',
    }))

    res.json(data) // Возвращаем обработанные данные
  } catch (error) {
    console.error('Error fetching Instagram feed:', error)
    res.status(500).json({ error: 'Failed to fetch Instagram feed' })
  }
}

module.exports = { getInstagramFeed }

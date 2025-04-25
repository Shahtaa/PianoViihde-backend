const axios = require('axios')

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

const getInstagramFeed = async (req, res) => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`
    )

    console.log('ACCESS_TOKEN:', ACCESS_TOKEN)
  
   // Let's make sure the data is correct
    const data = response.data.data.map((item) => ({
      id: item.id,
      caption: item.caption || 'No caption', // If caption is missing
      media_url: item.media_url || '',
      thumbnail_url: item.thumbnail_url || item.media_url, // If there's no thumbnail, use media_url
      permalink: item.permalink || '',
    }))

    res.json(data) // Returning the processed data
  } catch (error) {
    console.error('Instagram API error:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Message:', error.message);
    }
  
    res.status(500).json({ error: 'Failed to fetch Instagram feed' });
  }
  
}

module.exports = { getInstagramFeed }

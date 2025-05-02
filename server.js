const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/github/contributions', async (req, res) => {
  try {
    const username = req.query.username;
    console.log('Fetching contributions for:', username);
    
    const url = `https://kaival.dev/api/contributions?user=${username}`;
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Raw data received:', data);
    
    if (!Array.isArray(data)) {
      console.error('Invalid data format:', data);
      throw new Error('Invalid data format received from API');
    }

    // Transform the data to match the expected format
    const transformedData = data.map(contribution => {
      // Ensure the date is in a valid format
      const date = new Date(contribution.date);
      if (isNaN(date.getTime())) {
        console.error('Invalid date:', contribution.date);
        return null;
      }
      
      return {
        date: contribution.date,
        count: parseInt(contribution.count) || 0
      };
    }).filter(Boolean); // Remove any null entries

    console.log('Transformed data (first 5):', transformedData.slice(0, 5));
    console.log('Total contributions:', transformedData.length);
    
    res.json(transformedData);
  } catch (error) {
    console.error('Proxy error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Failed to fetch contributions',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
}); 
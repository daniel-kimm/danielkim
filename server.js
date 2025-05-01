import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/contributions', async (req, res) => {
  try {
    const response = await fetch('https://www.kaival.dev/api/contributions?user=daniel-kimm');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch contributions' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
}); 
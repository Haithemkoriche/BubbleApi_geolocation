const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/city', (req, res) => {
  // This is a sample endpoint to retrieve the city name
  res.json({ cityName: 'Sample City' });
});

app.listen(port, () => {
  console.log(`API server is listening at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cityRoutes = require('./routes/cityRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/city', cityRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

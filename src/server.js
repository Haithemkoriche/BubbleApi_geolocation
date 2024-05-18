const express = require('express');
const app = express();
const cityRoutes = require('./routes/cityRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/city', cityRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




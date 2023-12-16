// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const searchRoutes = require('./Routes/searchRoutes');
const sortRoutes = require('./Routes/sortRoutes');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/search', searchRoutes);
app.use('/sort', sortRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
app.use(express.json());

const product = require('./routes/productroute'); // Import routes
app.use('/api/v1', product); // ✅ Corrected variable name and route path

module.exports = app;

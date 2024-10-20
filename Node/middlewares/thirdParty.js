const express = require('express');
const morgan = require('morgan');
const app = express();

// Use morgan for logging requests
app.use(morgan('combined')); // 'combined' is a predefined format for logging

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

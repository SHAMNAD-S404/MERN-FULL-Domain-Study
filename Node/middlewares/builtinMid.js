const express = require('express');
const app = express();

// Built-in middleware to parse JSON requests
app.use(express.json());

// Route to handle POST requests with JSON data
app.post('/submit', (req, res) => {
  const data = req.body;  // Access parsed JSON data
  res.send(`Data received: ${JSON.stringify(data)}`);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

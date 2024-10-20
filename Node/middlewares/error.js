const express = require('express');
const app = express();

// Sample route that triggers an error
app.get('/error', (req, res, next) => {
  // Triggering an error
  const error = new Error('Something went wrong!');
  next(error);  // Pass the error to the error handler
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);  // Log the error message
  res.status(500).send('Internal Server Error');  // Send response to client
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

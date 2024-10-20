const express = require('express');
const app = express();

// Routing middleware for /profile route
app.use('/profile', (req, res, next) => {
  console.log(`Request to /profile: Method - ${req.method}, URL - ${req.url}`);
  next();  // Pass control to the next middleware or route handler
});

// Route handler for /profile
app.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

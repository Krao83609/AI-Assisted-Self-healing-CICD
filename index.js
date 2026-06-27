// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World! Your index.js project is running successfully.');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is happily running at http://localhost:${port}`);
});
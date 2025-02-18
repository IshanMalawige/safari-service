const express = require('express');
const connectDB = require('./db');  // Import the DB connection function

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Node.js server started on port ${port}`);
});

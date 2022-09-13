require("dotenv").config();
const express = require('express');
const db = require('./db.js');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/glossary', (req, res) => {
  res.send('hello world');
});

app.get('/glossary', (req, res) => {
  res.send('You have the world in your hand');
});

app.put('/glossary', (req, res) => {
  res.send('Finally, and edit button.');
});

app.delete('/glossary', (req, res) => {
  res.send('I have been deleted!');
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


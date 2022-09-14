require("dotenv").config();
const express = require('express');
const db = require('./db.js');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/glossary', (req, res) => {
  db.Word.create(req.body)
    .then(() => {
      res.send('Posted!')
    })
    .catch((err) => {
      res.send(err);
    })
});

app.get('/glossary', (req, res) => {
  db.Word.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/glossary', (req, res) => {
  db.Word.updateOne({ word: req.body.word}, {definition: req.body.definition})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
});

app.delete('/glossary', (req, res) => {
  db.Word.deleteOne({word: req.body.word})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


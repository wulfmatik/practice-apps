require("dotenv").config();
const express = require('express');
const db = require('./db.js');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

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
  if (Object.keys(req.query).length === 0) {
    db.Word.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  } else {
    db.Word.find({word: req.query.word})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  }
});

app.put('/glossary', (req, res) => {
  db.Word.findOneAndUpdate({ word: req.body.filter}, 
    {
      word: req.body.word,
      definition: req.body.definition
    })
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
      console.log('Deleted!')
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


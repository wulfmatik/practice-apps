require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const mysql = require("mysql2")

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/checkout', (req, res) => {
  db.query(`select * from users where name='${req.query.name}'`, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

app.post('/checkout', (req, res) => {
  var values = [req.session_id, req.body.name, req.body.email, req.body.password, req.body.address, req.body.phone, req.body.creditCard, req.body.expiry, req.body.ccv, req.body.billingZip];

  db.query('insert into users (sessionID, name, email, password, address, phone, creditCard, expiry, ccv, billingZip) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Saved!');
    }
  })
});

app.listen(3000, );
console.log(`Listening at http://localhost:${3000}`);

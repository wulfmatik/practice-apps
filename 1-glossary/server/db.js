require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log(err);
});

// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  id: Number,
  word: String,
  definition: String
});

let collectionName = 'Word';
let Word = mongoose.model('Word', glossarySchema, collectionName);

// 3. Export the models
module.exports.Word = Word;
//module.exports.save = save;
// 4. Import the models into any modules that need them

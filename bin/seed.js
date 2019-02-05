const mongoose = require('mongoose');
const CelebritiesModel = require('../models/celebrity.js');

// To insert in "bin/seeds.js"

const celebrities = [
  {
    name: 'CR7',
    occupation: 'football player',
    catchPhrase: 'Ohhh!',
  },
  {
    name: 'RQ7',
    occupation: 'football player',
    catchPhrase: 'Ai mae',
  },
  {
    name: 'Toy',
    occupation: 'singer',
    catchPhrase: 'Toda noite',
  },
];

mongoose.connect('mongodb://localhost:27017/iron-celebrities', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return CelebritiesModel.create(celebrities);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });

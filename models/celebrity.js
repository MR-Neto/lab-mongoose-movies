const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});

//collection dog
const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;

const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/bikesdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to bikes DB...'))
    .catch(err => console.log(`Error connecting to db : ${err}`));

//Exporting all models
module.exports.Bike = require('./bike');
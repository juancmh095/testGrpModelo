const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/test';

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(dc => console.log('DB CONECTADA...'))
    .catch(err => console.log(err));

module.exports = mongoose;
const mongoose = require('mongoose');
const { Schema } = mongoose;


/* se crea modelo con las columnas de la informacion descargada */
const citySchema = new Schema({
    geonameId: {type: String, required: false, default: 'NA'},
    name: {type: String, required: false, default: 'NA'},
    asciiname: {type: String, required: false, default: 'NA'},
    alternatenames: {type: String, required: false, default: 'NA'},
    latitude: {type: String, required: false, default: 'NA'},
    longitude: {type: String, required: false, default: 'NA'},
    featureClass: {type: String, required: false, default: 'NA'},
    featureCode: {type: String, required: false, default: 'NA'},
    countryCode: {type: String, required: false, default: 'NA'},
    cc2: {type: String, required: false, default: 'NA'},
    admin1: {type: String, required: false, default: 'NA'},
    admin2: {type: String, required: false, default: 'NA'},
    admin3: {type: String, required: false, default: 'NA'},
    admin4: {type: String, required: false, default: 'NA'},
    population: {type: String, required: false, default: 'NA'},
    elevation: {type: String, required: false, default: 'NA'},
    dem: {type: String, required: false, default: 'NA'},
    timezone: {type: String, required: false, default: 'NA'},
    modificationDate: {type: String, required: false, default: 'NA'},
});

module.exports = mongoose.model('citys', citySchema, 'citys');
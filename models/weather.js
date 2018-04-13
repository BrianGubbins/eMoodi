const mongoose = require('mongoose');
const config = require('../config/database');

// weather schema
const WeatherSchema = mongoose.Schema({
        cloudCover: {
            type: Number
        } ,
        rain: {
            type: Number
        },
        temp: {
            type: Number
        },
        summary: {
            type: String
        }
});

const Weather = module.exports = mongoose.model('Weather', WeatherSchema);

module.exports.newWeather= function(weatherDaily, callback){
    weatherDaily.save(callback);
}

module.exports.getWeather = function (id, callback) {
    Weather.findOne({}, callback).limit(1).sort({$natural:-1});
    //.sort({_id:-1}).limit(1)
}
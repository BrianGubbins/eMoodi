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
          console.log("function reached");

    weatherDaily.save(callback);
}

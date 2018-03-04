const mongoose = require('mongoose');
const config = require('../config/database');

// mood schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const MoodSchema = mongoose.Schema({
    userId: {
        type: ObjectId
    },
    date: {
        type: Date,
        default : Date.now
    },
    weather:{
        cloudCover: Number,
        rain: Number,
        temp: Number,
        summary: String
    },
    sleep:{
        type: Number,
    },
    diet: {
        type: String, 
    },
    exercise: {
        type: String, 
    },
    moodData: [{ 
        currMood: Number, 
        date: Date 
    }]
});

const Mood = module.exports = mongoose.model('Mood', MoodSchema);

module.exports.addMood= function(newMood, callback){
    newMood.save(callback);

}

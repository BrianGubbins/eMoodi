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
        default: Date.now
    },
    sleep: {
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

module.exports.addMood = function (newMood, callback) {

    var start = new Date();
    start.setHours(0, 0, 0, 0);

    var end = new Date();
    end.setHours(23, 59, 59, 999);

    Mood.update({
            date: {
                $gte: start,
                $lt: end
            },
            userId: newMood.userId
        }, {
            $setOnInsert: {
                userId: newMood.userId,
                date: newMood.date,
                sleep: newMood.sleep,
                diet: newMood.diet,
                exercise: newMood.exercise
            },
            $push: {
                moodData: newMood.moodData[0]
            }
        }, {
            upsert: true
        },
        callback)

}

module.exports.getMood = function (id, callback) {
    Mood.find({
            userId: id
        },
        callback

    ).limit(7).sort({$natural:-1});
}

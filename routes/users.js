const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const Mood = require('../models/mood');
const Weather = require('../models/weather');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
  
    User.addUser(newUser, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to register user'});
      } else {
        res.json({success: true, msg:'User registered'});
      }
    });
  });

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
  
    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
  
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data:user}, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

router.post('/addweather', (req, res, next) => {
  
  console.log("userWeather");

  let weatherDaily = new Weather({
    cloudCover: req.body.cloudCover,
    rain:  req.body.rain,
    temp: req.body.temp,
    summary:  req.body.summary
  });


//   let weatherDaily = new Weather({
//     cloudCover: 4,
//     rain: 4,
//     temp: 4,
//     summary: "this.forecast.daily.data[0].summary"
// });

  Weather.newWeather(weatherDaily, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to add weather'});
    } else {
      res.json({success: true, msg:'weather created'});
    }
  });
});


router.post('/mood', (req, res, next) => {
  console.log("hello2");

  let newMood = new Mood({
    userId: req.body.userId,
    date: req.body.date,
    sleep: req.body.sleep,
    diet: req.body.diet,
    exercise: req.body.exercise,
    moodData: req.body.moodData
  });

  console.log(newMood)

  Mood.addMood(newMood, (err, user) => {
    if(err){
      console.log(user);
      res.json({success: false, msg:'Failed to register user'});
    } else {
      console.log(user);
      res.json({success: true, msg:'User registered'});
    }
  });
});



router.get('/moodGET',passport.authenticate('jwt', {session: false}), (req, res, next) => {
  
  let id = '\"' + req.user._id + '\"';
  Mood.getMood( req.user._id, (err, mood) => {
    if(err){
      return done(err, false);
    }
    else{
      res.json({mood: mood});
    } 
  });
});

module.exports = router;
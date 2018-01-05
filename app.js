const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
    console.log('connected to database ' + config.database);
})

// On error
mongoose.connection.on('error', (err) => {
    console.log('database error ' + err);
})
 
const app = express();

const users = require('./routes/users')

// Port number
const port = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser Middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index route
app.get('/', (req,res) => {
    res.send('invalid endpoint');
});

app.get('*', (req,res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log('server started on port ' + port);
})
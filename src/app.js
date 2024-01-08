const express = require('express');
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');

require('dotenv').config();

const app = express();


// Settings

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'))

// Middlewares

app.use(session({
    secret: 'some secret',
    saveUninitialized: false,
    resave: false,
}));

// Router

app.use('/', require('./routes/home'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/projects', require('./routes/projects'));

module.exports = app;
const express = require('express');
const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const {jwtSecret} = require('./config')
module.exports = (app) => {
    app.use(express.json())

    // app.use(express.static('static'));
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser(jwtSecret));
    app.use(auth);
    //TODO: Setup the view engine
    // app.engine('hbs', handlebars({
    //     extname: 'hbs',
    // }));
    // app.set('view engine', 'hbs');
};
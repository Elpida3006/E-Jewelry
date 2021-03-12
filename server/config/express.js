const express = require('express');
const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
module.exports = (app) => {



    //TODO: Setup the body parser
    // app.use(bodyParser.urlencoded({ extended: true }));
    //TODO: Setup the static files
    app.use(express.static('static'));


    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());
    app.use(auth);

    //TODO: Setup the view engine
    app.engine('hbs', handlebars({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
};
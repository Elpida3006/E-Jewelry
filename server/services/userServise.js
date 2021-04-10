const getJWT = require('../utils/getJWT');
// const checkLogin = require('../middlewares/check-auth');
const { validationResult } = require('express-validator')
    // const Article = require('../models/Article')
const User = require('../models/User')
const { authCookieName, authHeaderName, jwtSecret } = require('../config/config');
const { verifyToken } = require('../utils/getJWT');


function getUser(req, res, next) {
    User.find()
            .then((users) => res.send(users))
            .catch(next)
}

function getLogout(req, res) {
    console.log(`you are logged out`);
  return  res.clearCookie(authCookieName)
        .status(200)
        .send({ message: 'You are Logged out!' })
        // res.redirect('/');
        // .catch(err =>   console.log(`you are NOT logged out`));

}


function getProfile(req, res, next) {
    const id = req.user._id
    console.log(`id: ${id}`);
    let myOffers = 0
    let total = 0
    User
        .findOne({ _id: id })
        // .populate('offersBought')
        .then(user => {
            user.offersBought.forEach(offer => {
                    total += offer.price
                    console.log('total');
                })
                console.log(`server user ${user}`);
                // res.render('profile', { user, myOffers, total })
            res.send(user)
        })
        .catch((err) => res.status(500).send("Error"));
    // .catch(next)

}

function postRegister(req, res, err) {
    const { email, fullname, password, rePassword } = req.body;
    // console.log(`it is a body: ${req.body}`);
    // console.log(fullname);
    // console.log(password);
    // console.log(rePassword);

    // User.create({ email, fullname, password })
    User.create({...req.body})
        .then((createdUser) => {
        console.log(createdUser);
        
            res.status(200)
                .send(createdUser);
        })
        .catch(err => console.log(`data is not send`))
        // .catch((err) => {
        //     // let errors = validationResult(req)
        //     if (err.errors) {
        //         console.log(err.errors);
        //         console.log(errors);
        //         let error = Object.keys(err.errors).map(everyError =>
        //             ({ msg: err.errors[everyError].properties.msg }))[0];

    //         res.render('register', { error });
    //         }



    // })
}

function postLogin(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);
    // console.log(password);
    User.findOne({ email })
        .then(user => {
console.log(`user is find as ${user}`);
            return Promise.all([
                user,
                user ? user.comparePasswords(password, next) : false
            ])
        })
        .then(([user, match]) => {
            if (!match) {
                res.status(401)
                    .send({ message: 'Wrong email or password' });
                // res.render('login', { errorMessage: 'Wrong username or password' });
                return;
            }

            const token = getJWT.createToken(user._id);


            res
                .status(200)
                // .cookie(authCookieName, token, { httpOnly: true }, { maxAge: 360000000 })
                // .redirect('/products')
                .header('authCookieHeader', token)
                .send(user)
                //    .send(user, token);
        })
        .catch(err => console.log(`user is not server logged`))
}
function checkToken(req, res, next) {
    const token = req.cookies[authCookieName] || req.headers[authHeaderName] || "";
    console.log(`Server send token: ${token}`);
    if (!token) { next(); return; }

    verifyToken(token)
        .then(({ _id }) => User.findOne({ _id }))
        .then(({ email, _id }) => {

            req.user = { email, _id };
            // console.log(req.user);
            res.locals.isLogged = Boolean(req.user);
            // res.locals.username = username;
            res.locals.email = email;
            //ako nqmame  res.locals.username = username;, trqbwa da pishem v hbs user.username
            //тук сетваме какво да виждаме в Hbs
            res.send(req.user)
            // next();
            //here send information to client is Logged/do you have a token  or not
        })
        .catch(err => console.log('wrong data - token is not verify'));

}
module.exports = {
    getUser,
    getLogout,
    getProfile,
    postRegister,
    postLogin,
    checkToken
}
const getJWT = require('../utils/getJWT');
// const checkLogin = require('../middlewares/check-auth');
const { validationResult } = require('express-validator')
const { jwtSecret, authCookieName } = require('../config/config')
    // const Article = require('../models/Article')
const User = require('../models/User')


// function getRegister(req, res) {
//     res.render('register');
// }

// function getLogin(req, res) {
//     res.render('login');
// }

function getLogout(req, res) {

    res.clearCookie(authCookieName)
        .status(200)
        .send({ message: 'You are Logged out!' })
        // console.log(`you are logged out`);
        // res.redirect('/');
        .catch(err => res.send(err));

}


function getProfile(req, res, next) {
    const id = req.user._id
    let myOffers = 0
    let total = 0
    User
        .findOne({ _id: id })
        .populate('offersBought')
        .lean()
        .then(user => {
            user.offersBought.forEach(offer => {
                    total += offer.price
                })
                // res.render('profile', { user, myOffers, total })
            res.send(user)
        })
        .catch((err) => res.status(500).send("Error"));
    // .catch(next)

}

function postRegister(req, res, err) {
    const { email, fullname, password, rePassword } = req.body;
    console.log(req.body);
    console.log(fullname);
    console.log(password);
    console.log(rePassword);

    // User.create({ email, fullname, password })
    User.create(req.body)
        .then((createdUser) => {

            // res.redirect('/user/login')
            res.status(200)
                .send(createdUser);
        })
        .catch(err)
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
                .cookie(authCookieName, token, { httpOnly: true }, { maxAge: 360000000 })
                // .redirect('/products')
                .send(user)
        })
        .catch(next);
}
module.exports = {
    // getRegister,
    // getLogin,
    getLogout,
    getProfile,

    postRegister,
    postLogin,

}
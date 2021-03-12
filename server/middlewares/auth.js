const { authCookieName, authHeaderName, jwtSecret } = require('../config/config');
const { verifyToken } = require('../utils/getJWT');
const User = require('../models/User')


module.exports = (req, res, next) => {
    // console.log(req);
    const token = req.cookies[authCookieName] || req.headers[authHeaderName] || "";

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
            next();
        })
        .catch(e => next(e));
    // locals - за да не го поддаваме навсякъде, a isLogged използваме в hbs


};
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')
    // const promisify = require('util').promisify;
    // const signToken = promisify(jwt.sign);
    // const verifytoken = promisify(jwt.verify)

function createToken(_id) {
    return jwt.sign({ _id }, jwtSecret, { expiresIn: '100h' })
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        //payload = decoded token
        jwt.verify(token, jwtSecret, (err, payload) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(payload)
        })
    })
}
module.exports = {
    createToken,
    verifyToken
}
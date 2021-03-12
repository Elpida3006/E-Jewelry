const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3002,
        dbConnectionString: 'mongodb://localhost:27017/E-Jewelry',
        origin: 'http://localhost:3000',
        base: 'E-Jewelry',
        authCookieName: 'auth_cookie',
        authHeaderName: 'auth',
        jwtSecret: 'secret',
        saltRounds: 10
    },
    production: {
        port: 80,
        // dbConnectionString: 'mongo "mongodb+srv://cluster0.rrksq.mongodb.net/MyBB" --username nadq'
    }
}

module.exports = config[env];
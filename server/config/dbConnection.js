const mongoose = require('mongoose');


module.exports = (dbConnectionString) => {
    //връща промис, затова използваме ртърн
    return mongoose.connect(dbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, `error connection to database: `))
    // db.once('open', () => console.log(`db in use`))
    // return db;
}
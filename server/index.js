const express = require('express');
const app = express();

const config = require('./config/config');
const errorHandler = require('./middlewares/global-error-handler')


require('./config/express')(app);
const apiRouter = require('./routes');

// app.use(apiRouter);

// app.use(errorHandler)
const cors = require('cors');
app.use(cors({
      origin: config.origin,
      credentials: true,
    exposedHeaders: "authCookieHeader"
}));
app.use('/api', apiRouter);
const dbConnectionPromise = require('./config/dbConnection')(config.dbConnectionString);

dbConnectionPromise.then(() => {
        console.log(`db ${config.base} in use`);
        app.listen(config.port, () => console.log(`Server Listening on port ${config.port}! Now its up to you...`));
    })
    .catch((err) => { console.log(`error connection to database`) });

// app.listen(config.port, () => console.log(`Listening on port ${config.port}! Now its up to you...`));
const express = require('express');
const path = require('path');

const app = express();

// const PORT = process.env.PORT;
const PORT = 3000;

/**
 * Handle parsing request body:
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Catch-all route handler for requests to an unknown route:
 */
app.use((req, res) => res.status(404).send("This is not the page you're looking for..."));

/**
 * Express routes:
 */

// LOGIN


/**
 * Express error handler:
 */
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred.'}
    };

    const errorObj = Object.assign({}, defaultErr, err);
    console.log('logging error object: ', errorObj.log);

    return res.status(errorObj.status).json(errorObj.message);
});

/**
 * Start express server:
 */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;
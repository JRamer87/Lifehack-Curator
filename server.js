'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const port = process.env.PORT || 8000;


app.disable('x-powered-by');
app.use(bodyParser.json());


const computer = require('./routes/computer');
app.use(computer);
//
//
// const travel = require('./routes/travel');
// app.use(travel);
//
//
// const smartphone = require('./routes/smartphone');
// app.use(smartphone);


app.use((_req, res) => {
    res.sendStatus(404);
});

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
    if (err.output && err.output.statusCode) {
        return res
            .status(err.output.statusCode)
            .set('Content-Type', 'text/plain')
            .send(err.message);
    }

    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.sendStatus(500);
});


app.listen(port, () => {
    if (app.get('env') !== 'test') {
        // eslint-disable-next-line no-console
        console.log('Listening on port', port);
    }
});

module.exports = app;

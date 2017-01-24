'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const category = require('./routes/category');
const env = require('dotenv')
    .config();
const port = process.env.PORT || 8000;

app.set('view engine', 'html');


app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));

app.disable('x-powered-by');


const index = require('./routes/index');
app.use(index);

const lifehacks = require('./routes/lifehacks');
app.use(lifehacks);

const users = require('./routes/users');
app.use(users);

app.use(category);

app.set('trust proxy', 1); // trust first proxy

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

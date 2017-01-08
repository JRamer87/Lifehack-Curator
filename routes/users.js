'use strict';

const express = require('express');
const app = express();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

/* eslint-disable max-len */
/* eslint-disable id-length */

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/users', (req, res) => {
    knex('users')
        .then((users) => {
            res.send(users);
        });
});

router.get('/users/:id', (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .first()
        .then((users) => {
            res.send(users);
        });
});

router.get('/', function(req, res, next) {
    // Update views
    req.session.views = (req.session.views || 0) + 1;

    // Write response
    res.end(req.session.views + ' views');
});

// router.post('/users', (req, res, next) => {
//     bcrypt.hash(req.body.password, 12)
//         .then((hashed_password) => {
//             return knex('users')
//                 .insert({
//                     user_name: req.body.user_name,
//                     hashed_password: hashed_password
//                 }, '*');
//         })
//         .then((users) => {
//             const user = users[0];
//             delete user.hashed_password;
//             res.send(user);
//         })
//         .catch((err) => {
//             next(err);
//         });
// });

router.post('/users', (req, res, next) => {
    const {
        user_name,
        password
    } = req.body;

    if (!user_name || user_name.trim() === '') {
        const err = new Error('user_name must not be blank');
        err.status = 400;

        return next(err);
    }

    if (!password || password.trim() === '') {
        const err = new Error('Password must not be blank');
        err.status = 400;

        return next(err);
    }

    knex('users')
        .select(knex.raw('1=1'))
        .where('user_name', user_name)
        .first()
        .then((exists) => {
            if (exists) {
                const err = new Error('user_name already exists');
                err.status = 400;

                throw err;
            }

            return bcrypt.hash(password, 12);
        })
        .then((hashed_password) => {
            return knex('users')
                .insert({
                    user_name,
                    hashed_password
                });
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            next(err);
        });
});



router.post('/session', (req, res, next) => {
    const {
        user_name,
        password
    } = req.body;

    if (!user_name || user_name.trim() === '') {
        const err = new Error('user_name must not be blank');
        err.status = 400;

        return next(err);
    }

    if (!password || password.trim() === '') {
        const err = new Error('Password must not be blank');
        err.status = 400;

        return next(err);
    }

    let user;

    knex('users')
        .where('user_name', user_name)
        .first()
        .then((row) => {
            if (!row) {
                const err = new Error('Unauthorized');
                err.status = 401;

                throw err;
            }

            user = row;

            return bcrypt.compare(password, row.hashed_password);
        })
        .then(() => {
            req.session.user_id = user.id;
            res.sendStatus(200);
        })
        .catch(bcrypt.MISMATCH_ERROR, () => {
            const err = new Error('Unauthorized');
            err.status = 401;

            throw err;
        })
        .catch((err) => {
            next(err);
        });
});

app.delete('/session', (req, res) => {
    req.session = null;
    res.sendStatus(200);
});

router.patch('/users/:id', (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .update(req.body)
        .returning(['user_id', 'user_name', 'hashed_password'])
        .then((users) => {
            res.send(users[0]);
        });
});

router.delete('/users/:id', (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .first()
        .then((users) => {
            knex('users')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete users.id;
                    res.send(users);
                });
        });
});

module.exports = router;

'use strict';

const express = require('express');
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

router.post('/users', (req, res, next) => {
    bcrypt.hash(req.body.password, 12)
        .then((hashed_password) => {
            return knex('users')
                .insert({
                    user_name: req.body.user_name,
                    hashed_password: hashed_password
                }, '*');
        })
        .then((users) => {
            const user = users[0];
            delete user.hashed_password;
            res.send(user);
        })
        .catch((err) => {
            next(err);
        });
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

'use strict';

const express = require('express');
const knex = require('../knex');

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

router.post('/users', (req, res) => {
    knex('users')
        .insert({
            user_name: req.body.user_name,
            hashed_password: req.body.hashed_password
        }, '*')
        .then((users) => {
            knex('users');
            console.log(users[0].id);
            res.send(users[0]);
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

'use strict';

const express = require('express');
const knex = require('../knex');

/* eslint-disable max-len */
/* eslint-disable id-length */

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/travel', (req, res) => {
    knex('travel')
        .then((travel) => {
            res.send(travel);
        });
});

router.get('/travel/:id', (req, res) => {
    knex('travel')
        .where('id', req.params.id)
        .first()
        .then((travel) => {
            res.send(travel);
        });
});

router.post('/travel', (req, res) => {
    knex('travel')
        .insert({
            user_id: req.body.user_id,
            category_id: req.body.category_id,
            name: req.body.name,
            description: req.body.description,
            url: req.body.url
        }, '*')
        .then((travel) => {
            knex('travel');
            console.log(travel[0].id);
            res.send(travel[0]);
        });
});

router.patch('/travel/:id', (req, res) => {
    knex('travel')
        .where('id', req.params.id)
        .update(req.body)
        .returning(['user_id', 'category_id', 'name', 'description', 'url'])
        .then((travel) => {
            res.send(travel[0]);
        });
});

router.delete('/travel/:id', (req, res) => {
    knex('travel')
        .where('id', req.params.id)
        .first()
        .then((travel) => {
            knex('travel')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete travel.id;
                    res.send(travel);
                });
        });
});

module.exports = router;

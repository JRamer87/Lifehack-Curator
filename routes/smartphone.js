'use strict';

const express = require('express');
const knex = require('../knex');

/* eslint-disable max-len */
/* eslint-disable id-length */

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/smartphone', (req, res) => {
    knex('smartphone')
        .then((smartphone) => {
            res.send(smartphone);
        });
});

router.get('/smartphone/:id', (req, res) => {
    knex('smartphone')
        .where('id', req.params.id)
        .first()
        .then((smartphone) => {
            res.send(smartphone);
        });
});

router.post('/smartphone', (req, res) => {
    knex('smartphone')
        .insert({
            user_id: req.body.user_id,
            category_id: req.body.category_id,
            name: req.body.name,
            description: req.body.description,
            url: req.body.url
        }, '*')
        .then((smartphone) => {
            knex('smartphone');
            console.log(smartphone[0].id);
            res.send(smartphone[0]);
        });
});

router.patch('/smartphone/:id', (req, res) => {
    knex('smartphone')
        .where('id', req.params.id)
        .update(req.body)
        .returning(['user_id', 'category_id', 'name', 'description', 'url'])
        .then((smartphone) => {
            res.send(smartphone[0]);
        });
});

router.delete('/smartphone/:id', (req, res) => {
    knex('smartphone')
        .where('id', req.params.id)
        .first()
        .then((smartphone) => {
            knex('smartphone')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete smartphone.id;
                    res.send(smartphone);
                });
        });
});

module.exports = router;

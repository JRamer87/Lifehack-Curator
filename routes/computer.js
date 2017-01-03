'use strict';

const express = require('express');
const knex = require('../knex');

/* eslint-disable max-len */
/* eslint-disable id-length */

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/computer', (req, res) => {
    knex('computer')
        .then((computer) => {
            res.send(computer)
        });
});

router.get('/computer/:id', (req, res) => {
    knex('computer')
        .where('id', req.params.id)
        .first()
        .then((computer) => {
            res.send(computer);
        });
});

router.post('/computer', (req, res) => {
    knex('computer')
        .insert({
            user_id: req.body.user_id,
            category_id: req.body.category_id,
            name: req.body.name,
            description: req.body.description,
            url: req.body.url
        }, '*')
        .then((computer) => {
            knex('computer')
            console.log(computer[0].id);
            res.send(computer[0]);
        });
});

router.patch('/computer/:id', (req, res) => {
    knex('computer')
        .where('id', req.params.id)
        .update(req.body)
        .returning(['user_id', 'category_id', 'name', 'description', 'url'])
        .then((computer) => {
            res.send(computer[0]);
        });
});

router.delete('/computer/:id', (req, res) => {
    knex('computer')
        .where('id', req.params.id)
        .first()
        .then((computer) => {
            knex('computer')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete computer.id;
                    res.send(computer);
                });
        });
});

module.exports = router;

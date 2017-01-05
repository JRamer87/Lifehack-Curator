'use strict';

const express = require('express');
const knex = require('../knex');

/* eslint-disable max-len */
/* eslint-disable id-length */

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/lifehacks', (req, res) => {
    knex('lifehacks')
        .then((lifehacks) => {
            res.send(lifehacks);
        });
});

router.get('/lifehacks/:id', (req, res) => {
    knex('lifehacks')
        .where('id', req.params.id)
        .first()
        .then((lifehacks) => {
            res.send(lifehacks);
        });
});

router.post('/lifehacks', (req, res) => {
    knex('lifehacks')
        .insert({
            user_id: req.body.user_id,
            category_id: req.body.category_id,
            name: req.body.name,
            description: req.body.description,
            url: req.body.url
        }, '*')
        .then((lifehacks) => {
            knex('lifehacks');
            console.log(lifehacks[0].id);
            res.send(lifehacks[0]);
        });
});

router.patch('/lifehacks/:id', (req, res) => {
    knex('lifehacks')
        .where('id', req.params.id)
        .update(req.body)
        .returning(['user_id', 'category_id', 'name', 'description', 'url'])
        .then((lifehacks) => {
            res.send(lifehacks[0]);
        });
});

router.delete('/lifehacks/:id', (req, res) => {
    knex('lifehacks')
        .where('id', req.params.id)
        .first()
        .then((lifehacks) => {
            knex('lifehacks')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete lifehacks.id;
                    res.send(lifehacks);
                });
        });
});

module.exports = router;

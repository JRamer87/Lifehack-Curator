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
        .where('category_id', req.params.id)
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

router.patch('/lifehacks', (req, res) => {
    console.log(req.body);
    knex('lifehacks')
        .where('id', req.body.id)
        .update({
            category_id: req.body.category_id,
            name: req.body.name,
            description: req.body.description,
            url: req.body.url
        })
        .returning(['id', 'category_id', 'name', 'description', 'url'])
        .then((lifehacks) => {
            res.send(lifehacks[0]);
        });
});

router.delete('/lifehacks', (req, res) => {
    console.log(req.body.id);
    knex('lifehacks')
        .where('id', req.body.id)
        .del()
        .then((lifehacks) => {
            res.send(lifehacks[0]);
        });
});

module.exports = router;

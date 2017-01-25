

const express = require('express');
const knex = require('../knex');

/* eslint-disable max-len */
/* eslint-disable id-length */

// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/category', (req, res) => {
  knex('category')
        .then((category) => {
          res.send(category);
        });
});

router.get('/category/:id', (req, res) => {
  knex('category')
        .where('id', req.params.id)
        .first()
        .then((category) => {
          res.send(category);
        });
});

router.post('/category', (req, res) => {
  knex('category')
        .insert({
          name: req.body.name,
        }, '*')
        .then((category) => {
          knex('category');
          console.log(category[0].id);
          res.send(category[0]);
        });
});

router.patch('/category/:id', (req, res) => {
  knex('category')
        .where('id', req.params.id)
        .update(req.body)
        .returning(['name'])
        .then((category) => {
          res.send(category[0]);
        });
});

router.delete('/category/:id', (req, res) => {
  knex('category')
        .where('id', req.params.id)
        .first()
        .then((category) => {
          knex('category')
                .where('id', req.params.id)
                .del()
                .then(() => {
                  delete category.id;
                  res.send(category);
                });
        });
});

module.exports = router;

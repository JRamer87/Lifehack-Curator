'use strict';

/* eslint-disable max-len */
/* eslint-disable camelcase */

exports.seed = function(knex) {
    return knex('category')
        .del()
        .then(() => knex.raw("ALTER SEQUENCE sports_id_seq RESTART WITH 1"))
        .then(() => knex('category')
            .insert(
                [{
                    /*Is each item it's own insert????*/
                    name: 'computer',
                    name: 'smartphone',
                    name: 'travel'
                }]));
};


/*
| Category   |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| name       | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |
*/

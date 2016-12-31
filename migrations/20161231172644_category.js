'use strict';

/* eslint-disable max-len */

exports.up = function(knex) {
    return knex.schema.createTable('category', (table) => {
        table.increments();
        table.string('name')
            .notNullable()
            .defaultTo('');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('category');
};

/*
| Category   |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| name       | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |
*/

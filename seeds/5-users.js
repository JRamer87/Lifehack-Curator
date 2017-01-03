'use strict';

exports.seed = function(knex) {
    return knex('users')
        .del()
        .then(() => knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"))
        .then(() => knex('users')
            .insert(
                [{
                    user_name: 'administrator',
                    hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
                }]));
};


/*
| Users           |               |                                |
|:----------------|:--------------|:-------------------------------|
| id              | serial        | primary key                    |
| user_name       | varchar(255)  | not null default ''            |
| hashed_password | varchar(255)  | not null default ''            |
| created_at   | timestamp with time zone | not null default now() |
| updated_at   | timestamp with time zone | not null default now() |
*/

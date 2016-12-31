'use strict';

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name')
        .del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('table_name')
                .insert({
                    id: 1,
                    colName: 'rowValue1'
                }),
                knex('table_name')
                .insert({
                    id: 2,
                    colName: 'rowValue2'
                }),
                knex('table_name')
                .insert({
                    id: 3,
                    colName: 'rowValue3'
                })
            ]);
        });
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

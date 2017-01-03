'use strict';

exports.seed = function(knex) {
    return knex('Computer')
        .del()
        .then(() => knex.raw("ALTER SEQUENCE sports_id_seq RESTART WITH 1"))
        .then(() => knex('computer')
            .insert(
                [{
                    name: "5 Advanced Mac Tricks You've Never Used",
                    description: "Mac OS X, now named macOS has become remarkably popular in the last several years since its official debut in 2001. Even though the OS is intuitive to use and many users consider themselves 'experts', I have five advanced tips you’ve likely never used.",
                    url: 'https://www.youtube.com/watch?v=uI4x0wvogco',
                    category_id: /*???????????*/
                }]));
};


/*
| Computer    |                           |                        |
|:------------|:--------------------------|:-----------------------|
| id         | serial                    | primary key             |
| category_id| integer                   | foreign key             |
| name       | varchar(255)              | not null default ''     |
| description| varchar(255)              | not null default ''     |
| url        | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |
*/

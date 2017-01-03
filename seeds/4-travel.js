'use strict';

exports.seed = function(knex) {
    return knex('travel')
        .del()
        .then(() => knex.raw("ALTER SEQUENCE travel_id_seq RESTART WITH 1"))
        .then(() => knex('travel')
            .insert(
                [{
                    name: 'The Coolest Travel Hacks',
                    description: 'We tried these travel hacks and thought they were all pretty dope. EXCEPT FOR ONE.',
                    url: 'https://www.youtube.com/watch?v=_gvA670PKaQ',
                    category_id: 3,
                    user_id: 1
                }]));
};


/*
| Travel        |                           |                        |
|:--------------|:--------------------------|:-----------------------|
| id           | serial                    | primary key             |
| category_id  | integer                   | foreign key             |
| user_id      | integer                   | foreign key             |
| name         | varchar(255)              | not null default ''     |
| description  | varchar(255)              | not null default ''     |
| url          | varchar(255)              | not null default ''     |
| created_at   | timestamp with time zone  | not null default now()  |
| updated_at   | timestamp with time zone  | not null default now()  |
*/

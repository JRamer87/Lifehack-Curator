exports.seed = function(knex) {
    return knex('computer')
        .del()
        .then(() => knex.raw("ALTER SEQUENCE sports_id_seq RESTART WITH 1"))
        .then(() => knex('computer')
            .insert(
                [{
                    name: '6 Smartphone Life Hacks',
                    // category_id: 'smartphone',
                    description: 'Six smartphone life hacks you should know!',
                    url: 'https://www.youtube.com/watch?v=08nkKJSNFA8'
                }]));
};


/*
| Smartphone |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| category_id| integer                   | foreign key             |
| name       | varchar(255)              | not null default ''     |
| description| varchar(255)              | not null default ''     |
| url        | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |
*/

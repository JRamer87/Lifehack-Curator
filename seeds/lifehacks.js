

exports.seed = function (knex) {
  return knex('lifehacks')
        .del()
        .then(() => knex.raw('ALTER SEQUENCE lifehacks_id_seq RESTART WITH 1'))
        .then(() => knex('lifehacks')
            .insert(
          [{
            name: "5 Advanced Mac Tricks You've Never Used",
            description: "Mac OS X, now named macOS has become remarkably popular in the last several years since its official debut in 2001. Even though the OS is intuitive to use and many users consider themselves 'experts', I have five advanced tips you’ve likely never used.",
            url: 'https://www.youtube.com/watch?v=uI4x0wvogco',
            category_id: 1,
            user_id: 1,
          }, {
            name: '6 Smartphone Life Hacks',
            description: 'Six smartphone life hacks you should know!',
            url: 'https://www.youtube.com/watch?v=08nkKJSNFA8',
            category_id: 2,
            user_id: 1,
          }, {
            name: 'The Coolest Travel Hacks',
            description: 'We tried these travel hacks and thought they were all pretty dope. EXCEPT FOR ONE.',
            url: 'https://www.youtube.com/watch?v=_gvA670PKaQ',
            category_id: 3,
            user_id: 1,
          }]));
};

/*
| Lifehacks  |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| category_id| integer                   | foreign key             |
| user_id    | integer                   | foreign key             |
| name       | varchar(255)              | not null default ''     |
| description| varchar(255)              | not null default ''     |
| url        | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |
*/

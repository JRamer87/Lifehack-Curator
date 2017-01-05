# Lifehack-Curator

## Database

| Users           |               |                                |
|:----------------|:--------------|:-------------------------------|
| id              | serial        | primary key                    |
| user_name       | varchar(255)  | not null default ''            |
| hashed_password | varchar(255)  | not null default ''            |
| created_at   | timestamp with time zone | not null default now() |
| updated_at   | timestamp with time zone | not null default now() |

| Category   |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| name       | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |

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

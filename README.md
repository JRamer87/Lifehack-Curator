# Lifehack-Curator

## Database

| Category   |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| name       | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |

| Smartphone |                           |                         |
|:-----------|:--------------------------|:------------------------|
| id         | serial                    | primary key             |
| category_id| integer                   | foreign key             |
| name       | varchar(255)              | not null default ''     |
| description| varchar(255)              | not null default ''     |
| url        | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |


| Computer    |                           |                        |
|:------------|:--------------------------|:-----------------------|
| id         | serial                    | primary key             |
| category_id| integer                   | foreign key             |
| name       | varchar(255)              | not null default ''     |
| description| varchar(255)              | not null default ''     |
| url        | varchar(255)              | not null default ''     |
| created_at | timestamp with time zone  | not null default now()  |
| updated_at | timestamp with time zone  | not null default now()  |

| Travel        |                           |                        |
|:--------------|:--------------------------|:-----------------------|
| id           | serial                    | primary key             |
| category_id  | integer                   | foreign key             |
| name         | varchar(255)              | not null default ''     |
| description  | varchar(255)              | not null default ''     |
| url          | varchar(255)              | not null default ''     |
| created_at   | timestamp with time zone  | not null default now()  |
| updated_at   | timestamp with time zone  | not null default now()  |


| Users           |               |                                |
|:----------------|:--------------|:-------------------------------|
| id              | serial        | primary key                    |
| user_name       | varchar(255)  | not null default ''            |
| hashed_password | varchar(255)  | not null default ''            |
| created_at   | timestamp with time zone | not null default now() |
| updated_at   | timestamp with time zone | not null default now() |

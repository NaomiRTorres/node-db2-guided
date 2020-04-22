# DB II Guided Project

Guided project **DB II** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a REST client alike [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- create a free account for [DB Designer](https://dbdesigner.net).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.


## NOTES
- EVERY TABLE NEEDS A PRIMARY KEY

## COMMANDS
- sudo npx i -g knex
- knex init
- knex migrate:make add_vegetables_table 
- knex migrate:latest


## Add fruits table
    The schema is as follows:
    - an 'id' as the primary key, make it autoincrement
    - a 'name' column that is a string, make it be unique and have a max length of 128 chara. required.
    - a 'avgWeight' column that stores decimal values.
    - a 'delicious' column that can store 'true' or 'false' values. Make it default to 'true'
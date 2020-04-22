
// the .up() method describes the changes to the database schema
exports.up = function(knex) {
  return knex.schema.createTable('veggies', tbl => {
      // a primary key, called id that auto increments
      tbl.increments('id');
      
      // name
      // an index makes searching for a value in a column a LOT faster
      tbl.string('name', 255).notNullable().unique().index();

      //tasty
      tbl.boolean('tasty').defaultsTo(true);
  })
};

// the .down() method describes how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};

// knex migrate:make add_veggies
// delete the database file
// knex migrate:latest
// knex migrate:rollback to undo changes
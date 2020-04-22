
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
      tbl.increments('id');

      tbl.string('name', 128).notNullable().unique().index();

      tbl.decimal('avgWeight').notNullable();

      tbl.boolean('delicious').defaultsTo(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};

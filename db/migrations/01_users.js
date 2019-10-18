
exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("phone").notNullable();
    table.timestamps(true, true).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};

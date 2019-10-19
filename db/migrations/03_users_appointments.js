
exports.up = function(knex) {
  return knex.schema.createTable("users_appointments", function (table) {
    table.increments();
    table.integer("user_id").references("id").inTable("users");
    table.integer("appointment_id").references("id").inTable("appointments");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users_appointments")
};

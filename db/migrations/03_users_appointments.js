
exports.up = function (knex) {
  
  return knex.schema.createTable("users_appointments", function (table) {
    table.increments();
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.integer("appointment_id").references("id").inTable("appointments").onDelete("CASCADE");
    table.boolean("accepted").defaultTo(false);
  })
};

exports.down = function (knex) {
  
  return knex.schema.dropTable("users_appointments")
};


exports.up = function(knex) {
  return knex.schema.createTable("appointments", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.text("details");
    table.text("location");
    table.date("date").notNullable();
    table.time('time').notNullable();
    table.boolean("completed").defaultTo(false);
    table.integer("creator_id").references("id").inTable("users").notNullable();
    table.integer("invitee_id").references("id").inTable("users");
    table.boolean("accepted").defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("appointments")
};

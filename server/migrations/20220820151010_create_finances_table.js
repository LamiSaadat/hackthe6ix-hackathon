exports.up = function (knex) {
  return knex.schema.createTable("finances", (table) => {
    table.increments("id").primary();
    table.string("category").notNullable();
    table.string("type").notNullable();
    table.text("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("finances");
};

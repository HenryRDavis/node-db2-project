// record changes to the db schema

// the up() function holds/defines/describes the changes to apply to the db when the migartion runs
exports.up = function(knex) {
  return knex.schema.createTable('car_deals', tbl => {
    tbl.string("VIN").primary();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.integer("Mileage").unsigned().notNullable();
    tbl.string("Transmission Type").nullable();
    tbl.string("Title Status").nullable();
  })
};


// the down() function describes how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car_deals');
};

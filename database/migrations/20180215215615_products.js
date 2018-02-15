const { Migration } = require('../app/tools/Migration');

// Table Name
const TABLE_NAME = 'products';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
  await db.schema.hasTable(TABLE_NAME)
    .createTable(TABLE_NAME, (table) => {
      table.increments('pro_id');
      table.string('pro_name', 100);
      table.integer('pro_price');
      table.timestamps(false, true);
    });
};

/**
 * Migration Down
 * @param {Migration} db
 */
exports.down = async (db) => {
  await db.schema.dropTableIfExists(TABLE_NAME);
};

const { Migration } = require('../../app/tools/Migration');

// Table Name
const TABLE_NAME = 'requests';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
  await db.schema.hasTable(TABLE_NAME)
    .createTable(TABLE_NAME, (table) => {
      table.string('request_id').primary();
      table.string('request_type', 255);
      table.string('purchase_id', 255).references('purchases.purchase_id');
      table.timestamps(false, true);
    });
};

/**
 * Migration Down
 * @param {Migration} db
 */
exports.down = async (db) => {
  await db.schema.hasTable(TABLE_NAME).dropTableIfExists(TABLE_NAME);
};

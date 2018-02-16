const { Migration } = require('../../app/tools/Migration');

// Table Name
const TABLE_NAME = 'purchases';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
  await db.schema.hasTable(TABLE_NAME)
    .createTable(TABLE_NAME, (table) => {
      table.string('purchase_id').primary();
      table.text('products', 'longtext');
      table.string('shop_id', 255).references('shops.shop_id');
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

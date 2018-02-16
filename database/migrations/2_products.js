const { Migration } = require('../../app/tools/Migration');

// Table Name
const TABLE_NAME = 'products';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
  await db.schema.hasTable(TABLE_NAME)
    .createTable(TABLE_NAME, (table) => {
      table.string('product_id').primary();
      table.string('product_name', 100);
      table.integer('product_price');
      table.string('shop_id', 255);
      table.foreign('shop_id').references('shop_id').inTable('shops');
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

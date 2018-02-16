// Table Name
const TABLE_NAME = 'purchases';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    { purchase_id: 'purchase:1', shop_id: 'shop:1', products: 'product:1' },
  ]);
};

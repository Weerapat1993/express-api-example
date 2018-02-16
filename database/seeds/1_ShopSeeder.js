// Table Name
const TABLE_NAME = 'shops';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    { shop_id: 'shop:1', shop_name: 'My Shop' },
  ]);
};

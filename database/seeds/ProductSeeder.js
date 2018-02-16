

// Table Name
const TABLE_NAME = 'products';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    { pro_id: 'product:1', pro_name: 'Shoes', pro_price: 120 },
    { pro_id: 'product:2', pro_name: 'Boots', pro_price: 100 },
  ]);
};

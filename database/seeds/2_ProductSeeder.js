// Table Name
const TABLE_NAME = 'products';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    { product_id: 'product:1', product_name: 'Shoes', product_price: 120, shop_id: 'shop:1' },
    { product_id: 'product:2', product_name: 'Boots', product_price: 100, shop_id: 'shop:1' },
  ]);
};

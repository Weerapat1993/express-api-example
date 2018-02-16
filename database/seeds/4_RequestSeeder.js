// Table Name
const TABLE_NAME = 'requests';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    { request_id: 'request:1', request_type: 'Buyer', purchase_id: 'purchase:1' },
  ]);
};

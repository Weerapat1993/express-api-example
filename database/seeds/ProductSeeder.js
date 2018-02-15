
exports.seed = async (db) => {
  await db('products').del();
  await db('products').insert([
    { pro_id: 1, pro_name: 'Shoes', pro_price: 120 },
    { pro_id: 2, pro_name: 'Boots', pro_price: 100 },
  ]);
};

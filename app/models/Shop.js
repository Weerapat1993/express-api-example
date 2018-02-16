import bookshelf from '../config/database';

const Shops = bookshelf.Model.extend({
  tableName: 'shops',
});

export default Shops.collection();

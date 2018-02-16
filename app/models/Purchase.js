import bookshelf from '../config/database';

const Purchases = bookshelf.Model.extend({
  tableName: 'purchases',
});

export default Purchases.collection();

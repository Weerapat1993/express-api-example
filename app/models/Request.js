import bookshelf from '../config/database';

const Requests = bookshelf.Model.extend({
  tableName: 'requests',
});

export default Requests.collection();

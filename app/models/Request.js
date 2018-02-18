import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const Requests = ModelBase.extend({
  tableName: 'requests',
});

export default Requests;

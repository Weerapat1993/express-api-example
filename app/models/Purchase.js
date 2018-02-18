import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const Purchases = ModelBase.extend({
  tableName: 'purchases',
});

export default Purchases;

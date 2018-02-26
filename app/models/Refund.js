import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const Refund = ModelBase.extend({
  tableName: 'refunds',
});

export default Refund;

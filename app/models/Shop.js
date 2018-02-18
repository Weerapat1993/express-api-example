import Joi from 'joi';
import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const Shops = ModelBase.extend({
  tableName: 'shops',

  validate: {
    shop_id: Joi.string().required(),
    shop_name: Joi.string().required(),
  },
});

export default Shops;

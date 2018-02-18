import Joi from 'joi';
import ModelBase from '../config/database';

const Shops = ModelBase.extend({
  tableName: 'shops',

  validate: {
    shop_id: Joi.string().required(),
    shop_name: Joi.string().required(),
  },
});

export default Shops;

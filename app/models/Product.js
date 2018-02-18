import Joi from 'joi';
import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const Products = ModelBase.extend({
  tableName: 'products',

  validate: {
    product_id: Joi.string().required(),
    product_name: Joi.string().required(),
    product_price: Joi.number().required(),
    shop_id: Joi.string().required(),
  },
});

export default Products;

// import { Schema, model } from 'mongoose';

// const ProductSchema = new Schema({
//   name: { type: 'String', required: true },
//   title: { type: 'String', required: true },
//   content: { type: 'String', required: true },
//   slug: { type: 'String', required: true },
//   cuid: { type: 'String', required: true },
//   dateAdded: { type: 'Date', default: Date.now, required: true },
// });

// export default model('Post', ProductSchema);

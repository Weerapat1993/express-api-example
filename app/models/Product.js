import ModelBase from '../config/database';

const Products = ModelBase.extend({
  tableName: 'products',
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

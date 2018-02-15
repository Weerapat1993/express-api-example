import DB from '../config/database';

export default DB('products');

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

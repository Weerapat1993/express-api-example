import { Product } from '../models';

/**
 * Get all posts
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllProduct = (req, res) => {
  Product.find('all', (err, rows, fields) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(fields)
    const dataResponse = {
      data: rows,
      code: 200,
      status: 'OK',
    };
    res.json(dataResponse);
  });

  // Product.find().sort('-dateAdded').exec((err, posts) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ posts });
  // });
};

export default getAllProduct;


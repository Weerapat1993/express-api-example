import { Product } from '../models';

/**
 * Get all Product
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllProduct = (req, res) => {
  Product.fetch()
    .then((data) => {
      const dataResponse = {
        data,
        code: 200,
        status: 'OK',
      };
      res.json(dataResponse);
    })
    .catch((err) => {
      const errorResponse = {
        error: err,
        code: 500,
        status: 'Error',
      };
      res.status(500).send(errorResponse);
    });
};

export default getAllProduct;


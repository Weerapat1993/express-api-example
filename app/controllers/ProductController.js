import { Product } from '../models';
import { SuccessCase, APIExpection } from '../tools/RestfulAPI';

/**
 * @api {get} /products GET Product Lists
 * @apiSampleRequest /api/products
 * @apiName GetProducts
 * @apiGroup Product
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Product is not found.",
 *       "code": 404,
 *       "status": "Not Found",
 *     }
 */


/**
 * Get all Shop
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllProduct = (req, res) => {
  APIExpection(res, async () => {
    const products = await Product.query((qb) => {
      qb.innerJoin('shops', 'shops.shop_id', 'products.shop_id');
      qb.select('products.*', 'shops.shop_name as shop_name');
    }).fetch();

    // Map Data
    const newProducts = products.map((item) => {
      const state = item.attributes;
      return {
        ...state,
        shop: {
          shop_id: state.shop_id,
          shop_name: state.shop_name,
        },
      };
    });
    await res.json(SuccessCase(newProducts));
  });
};

export default getAllProduct;

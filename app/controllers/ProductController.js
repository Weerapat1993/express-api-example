import { Product } from '../models';
import { SuccessCase, ErrorCase } from '../tools/RestfulAPI';

/**
 * Get all Shop
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.query((qb) => {
      qb.innerJoin('shops', 'shops.shop_id', 'products.shop_id');
      qb.select('products.*', 'shops.shop_name as shop_name');
    }).fetch();

    // Map Data
    const newProducts = products.map((item) => {
      const { shop_id, shop_name } = item.attributes;
      return {
        ...item.attributes,
        shop: {
          shop_id,
          shop_name,
        },
      };
    });
    await res.json(SuccessCase(newProducts));
  } catch (error) {
    console.log(error);
    res.status(500).send(ErrorCase(error));
  }
};

export default getAllProduct;

import { Shop } from '../models';
import { SuccessCase, ErrorCase } from '../tools/RestfulAPI';

/**
 * Get all Shop
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllShop = async (req, res) => {
  try {
    const shops = await Shop.fetch();
    await res.json(SuccessCase(shops));
  } catch (error) {
    res.status(500).send(ErrorCase(error));
  }
};

export default getAllShop;

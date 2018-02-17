import { Shop } from '../models';
import { SuccessCase, APIExpection } from '../tools/RestfulAPI';

/**
 * @api {get} /shops GET Request Lists
 * @apiSampleRequest /api/shops
 * @apiName GetShops
 * @apiGroup Shop
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
 *       "error": "Shop is not found.",
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
export const getAllShop = (req, res) => {
  APIExpection(res, async () => {
    const shops = await Shop.fetch();
    await res.json(SuccessCase(shops));
  });
};

export default getAllShop;

import { Purchase } from '../models';
import { APIExpection, SuccessCase } from '../tools/RestfulAPI';

/**
 * @api {get} /purchases GET Purchase Lists
 * @apiSampleRequest /api/purchases
 * @apiName GetPurchases
 * @apiGroup Purchase
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
 *       "error": "Purchase is not found.",
 *       "code": 404,
 *       "status": "Not Found",
 *     }
 */

/**
 * Get all Purchase
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllPurchase = (req, res) => {
  APIExpection(res, async () => {
    const purchases = await Purchase.fetch();
    await res.json(SuccessCase(purchases));
  });
};

/**
 * @api {get} /purchases/:id GET Purchase By ID
 * @apiSampleRequest /api/purchases/purchase:1
 * @apiName GetPurchasesByID
 * @apiGroup Purchase
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
 *       "error": "Purchase is not found.",
 *       "code": 404,
 *       "status": "Not Found",
 *     }
 */

/**
 * Get by ID Purchase
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getByIDPurchase = (req, res) => {
  const { id } = req.params;
  APIExpection(res, async () => {
    const purchases = await Purchase.query({ where: { purchase_id: id } }).fetchOne();
    await res.json(SuccessCase(purchases));
  });
};

export default getAllPurchase;

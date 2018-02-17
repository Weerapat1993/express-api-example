import { Purchase } from '../models';
import { APIExpection, SuccessCase } from '../tools/RestfulAPI';

/**
 * @apiDefine ErrorResponse
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
 * @api {get} /purchases GET Purchase Lists
 * @apiSampleRequest /api/purchases
 * @apiName GetPurchases
 * @apiGroup Purchase
 *
 * @apiSuccess {Array} data  Data Purchase List Response
 * @apiSuccess {Number} code  Status Code
 * @apiSuccess {String} status  Status Message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "data": [
 *             {
 *                 "purchase_id": "purchase:1",
 *                 "products": "product:1",
 *                 "shop_id": "shop:1",
 *                 "created_at": "2018-02-17T06:02:23.000Z",
 *                 "updated_at": "2018-02-17T06:02:23.000Z"
 *             }
 *         ],
 *         "code": 200,
 *         "status": "Success"
 *     }
 * @apiUse ErrorResponse
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
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "purchase:1"
 *     }
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authentication": "{{token}}"
 *     }
 *
 * @apiSuccess {Object} data  Data Purchase Response
 * @apiSuccess {Number} code  Status Code
 * @apiSuccess {String} status  Status Message
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "purchase_id": "purchase:1",
 *         "products": "product:1",
 *         "shop_id": "shop:1",
 *         "created_at": "2018-02-17T06:02:23.000Z",
 *         "updated_at": "2018-02-17T06:02:23.000Z"
 *       },
 *       "code": 200,
 *       "status": "Success"
 *     }
 *
 * @apiUse ErrorResponse
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

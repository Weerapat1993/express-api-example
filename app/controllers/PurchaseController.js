import { Purchase } from '../models';
import Controller from './Controller';

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
 * @api {get} /purchases/:id GET Purchase By ID
 * @apiSampleRequest /api/purchases/purchase:1
 * @apiName GetPurchaseByID
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

class PurchaseController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'purchase_id';
    this.Model = Purchase;
  }
}

export default PurchaseController;

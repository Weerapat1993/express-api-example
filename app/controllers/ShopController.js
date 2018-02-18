import { Shop } from '../models';
import Controller from './Controller';

/**
 * @api {get} /shops GET Shop Lists
 * @apiSampleRequest /api/shops
 * @apiName GetShops
 * @apiGroup Shop
 * @apiUse ErrorResponse
 */

/**
 * @api {get} /shop/:id GET Shop By ID
 * @apiSampleRequest /api/shops/shop:1
 * @apiName GetShopByID
 * @apiGroup Shop
 *
 * @apiSuccess {Object} data  Data Shop Response
 * @apiSuccess {Number} code  Status Code
 * @apiSuccess {String} status  Status Message
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "shop_id": "shop:1",
 *         "shop_name": "My Shop",
 *         "created_at": "2018-02-17T06:02:23.000Z",
 *         "updated_at": "2018-02-17T06:02:23.000Z",
 *       },
 *       "code": 200,
 *       "status": "Success"
 *     }
 *
 * @apiUse ErrorResponse
 */

class ShopController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'shop_id';
    this.Model = Shop;
  }
}

export default ShopController;

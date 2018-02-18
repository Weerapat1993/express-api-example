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

import { Purchase } from '../models';
import Controller from './Controller';

/**
 * @api {get} /purchases GET Purchase Lists
 * @apiSampleRequest /api/purchases
 * @apiName GetPurchases
 * @apiGroup Purchase
 * @apiUse ErrorResponse
 */

/**
 * @api {get} /purchases/:id GET Purchase By ID
 * @apiSampleRequest /api/purchases/purchase:1
 * @apiName GetPurchaseByID
 * @apiGroup Purchase
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

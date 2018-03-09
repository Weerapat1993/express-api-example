import Refund from '../../models/Refund';
import { Controller } from '../Kernel';
import resData from './refundByID.json';

/**
 * @api {get} /refund-orders/:id GET Refund By ID
 * @apiSampleRequest /api/refund-orders/reforder:1
 * @apiName GetRefundByID
 * @apiGroup Refund
 * @apiUse ErrorResponse
 */

/**
 * @api {put} /refund-orders PUT Refund Update
 * @apiSampleRequest /api/refund-orders
 * @apiParam {String} status  Refund Status
 * @apiName UpdateRefund
 * @apiGroup Refund
 * @apiUse ErrorResponse
 */

class RefundController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Refund;
  }

  byID() {
    const { data } = resData;
    this.getSuccess(200, data);
  }

  update() {
    const { body } = this.request;
    this.getSuccess(200, body);
  }
}

export default RefundController;

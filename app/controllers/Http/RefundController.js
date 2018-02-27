import { Refund } from '../../models';
import { Controller } from '../Kernel';
import resData from './refundByID.json';

/**
 * @api {get} /purchases/:id GET Refund By ID
 * @apiSampleRequest /api/refund-orders/reforder:1
 * @apiName GetRefundByID
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
}

export default RefundController;

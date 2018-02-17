import { Request } from '../models';
import Controller from './Controller';

/**
 * @api {get} /requests GET Request Lists
 * @apiSampleRequest /api/requests
 * @apiName GetRequests
 * @apiGroup Request
 * @apiUse ErrorResponse
 */

/**
 * @api {get} /requests/:id GET Request By ID
 * @apiSampleRequest /api/requests/request:1
 * @apiName GetRequestByID
 * @apiGroup Request
 * @apiUse ErrorResponse
 */

class RequestController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'request_id';
    this.Model = Request;
  }
}

export default RequestController;

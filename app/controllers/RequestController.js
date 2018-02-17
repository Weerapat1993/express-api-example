import { Request } from '../models';
import { APIExpection, SuccessCase } from '../tools/RestfulAPI';

/**
 * @api {get} /requests GET Request Lists
 * @apiSampleRequest /api/requests
 * @apiName GetRequests
 * @apiGroup Request
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
 *       "error": "Request is not found.",
 *       "code": 404,
 *       "status": "Not Found",
 *     }
 */

/**
 * Get all Request
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllRequest = (req, res) => {
  APIExpection(res, async () => {
    const requests = await Request.fetch();
    await res.json(SuccessCase(requests));
  });
};

export default getAllRequest;

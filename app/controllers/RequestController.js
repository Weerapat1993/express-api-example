import { Request } from '../models';

/**
 * Get all Request
 * @param {Object} req
 * @param {{ json: Function, status: Function, send: Function }} res
 * @returns void
 */
export const getAllRequest = (req, res) => {
  Request.fetch()
    .then((data) => {
      const dataResponse = {
        data,
        code: 200,
        status: 'OK',
      };
      res.json(dataResponse);
    })
    .catch((err) => {
      const errorResponse = {
        error: err,
        code: 500,
        status: 'Error',
      };
      res.status(500).send(errorResponse);
    });
};

export default getAllRequest;

import ProductController from './ProductController';
import ShopController from './ShopController';
import PurchaseController from './PurchaseController';
import RequestController from './RequestController';

const Controller = {
  ProductController,
  ShopController,
  PurchaseController,
  RequestController,
};

export const Route = (ControllerName, name) => (req, res, next) => (
  new Controller[ControllerName](req, res, next)[name]()
);

export default Controller;

/**
 * @apiDefine ErrorResponse
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Data is not found.",
 *       "code": 404,
 *       "status": "Not Found",
 *     }
 */

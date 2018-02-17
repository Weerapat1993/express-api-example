import ProductController from './ProductController';
import ShopController from './ShopController';
import PurchaseController from './PurchaseController';
import RequestController from './RequestController';

const Route = (Controller, name) => (req, res, next) => new Controller(req, res, next)[name]();

export {
  Route,
  ProductController,
  ShopController,
  PurchaseController,
  RequestController,
};


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

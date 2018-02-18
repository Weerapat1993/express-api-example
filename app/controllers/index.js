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
 */

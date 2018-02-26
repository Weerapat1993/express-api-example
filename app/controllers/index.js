import ProductController from './ProductController';
import ShopController from './ShopController';
import PurchaseController from './PurchaseController';
import RequestController from './RequestController';
import ArticleController from './ArticleContainer';
import RefundController from './RefundController';

const Controller = {
  ProductController,
  ShopController,
  PurchaseController,
  RequestController,
  ArticleController,
  RefundController,
};

export const Route = (ControllerName, name) => (req, res, next) => (
  new Controller[ControllerName](req, res, next)[name]()
);

export default Controller;

/**
 * @apiDefine ErrorResponse
 */

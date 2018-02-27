import ProductController from './ProductController';
import ShopController from './ShopController';
import PurchaseController from './PurchaseController';
import RequestController from './RequestController';
import ArticleController from './ArticleContainer';
import RefundController from './RefundController';
import UserController from './UserController';
import AuthController from './Auth/AuthController';

const Controller = {
  ProductController,
  ShopController,
  PurchaseController,
  RequestController,
  ArticleController,
  RefundController,
  UserController,
  AuthController,
};

export default Controller;

/**
 * @apiDefine ErrorResponse
 */

export const Route = (ControllerName, name) => (req, res, next) => (
  new Controller[ControllerName](req, res, next)[name]()
);

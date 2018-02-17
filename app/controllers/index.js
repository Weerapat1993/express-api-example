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

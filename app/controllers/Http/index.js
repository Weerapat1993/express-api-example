import RefundController from './RefundController';
import ArticleController from './ArticleContainer';
import UserController from './UserController';

const Controller = {
  RefundController,
  ArticleController,
  UserController,
};

export default Controller;

/**
 * @apiDefine ErrorResponse
 */

export const Route = (ControllerName, name) => (req, res, next) => (
  new Controller[ControllerName](req, res, next)[name]()
);

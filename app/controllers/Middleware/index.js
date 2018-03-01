import AuthMiddleware from './AuthMiddleware';
import ErrorMiddleware from './ErrorMiddleware';

const Middlewares = {
  AuthMiddleware,
};

export default Middlewares;

export const Middleware = (MiddlewareName, name) => (req, res, next) => (
  new Middlewares[MiddlewareName](req, res, next)[name]()
);

export { ErrorMiddleware };

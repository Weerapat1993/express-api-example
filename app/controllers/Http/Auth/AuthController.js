import jwtDecode from 'jwt-decode';
import { User } from '../../../models';
import { Controller } from '../../Kernel';

class AuthController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = User;
  }

  async getAuth() {
    // provide the data that was used to authenticate the request; if this is
    // not set then no attempt to authenticate is registered.
    const token = this.request.get('Authorization');
    try {
      let user = {};
      if (token) {
        const decoded = await jwtDecode(token);
        user = await this.Model.collection()
          .query({ where: { email: decoded.email } })
          .fetchOne();
      }
      if (user.attributes) {
        this.request.auth = () => ({
          isAuth: true,
          user: user.attributes,
        });
      } else {
        this.request.auth = () => ({
          isAuth: false,
          user: {},
        });
      }
      this.next();
    } catch (error) {
      this.request.auth = () => ({
        isAuth: false,
        user: {},
      });
      this.next();
    }
  }
}

export default AuthController;

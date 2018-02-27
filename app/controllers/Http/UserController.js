import _ from 'lodash';
import { User } from '../../models';
import { Controller } from '../Kernel';

class UserController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = User;
  }

  authFacebook() {
    const {
      id,
      displayName,
      name,
      gender,
      photos,
      jwtoken,
      _json,
    } = this.request.user;
    const formatData = {
      facebook_id: id,
      email: _json.email,
      name: displayName,
      firstname: name.givenName,
      lastname: name.familyName,
      gender,
      avatar: _.get(photos, '0.value', ''),
      remember_token: jwtoken,
    };
    this.Expectation(async () => {
      const user = await this.Model
        .collection()
        .query({ where: { facebook_id: id } })
        .fetchOne();
      if (user) {
        const { token } = this.request.user;
        await this.getSuccess(200, { token });
      } else {
        this.postData(formatData);
      }
    });
  }

  postData(body) {
    this.Model.create(body)
      .then(() => {
        const { token } = this.request.user;
        this.getSuccess(201, { token });
      })
      .catch((error) => {
        const err = _.get(error, 'details.0.message', 'Error');
        this.getFailure(400, err);
      });
  }

  getAuthResponse() {
    this.getSuccess(200, this.request.auth().user);
  }
}

export default UserController;

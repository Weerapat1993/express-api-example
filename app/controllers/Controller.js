
export const codeStatus = (code) => {
  switch (code) {
    case 200: return 'OK';
    case 201: return 'Created';
    case 400: return 'Bad Request';
    case 401: return 'Unauthorized';
    case 403: return 'Forbidden';
    case 404: return 'Not Found';
    case 500: return 'Internal Server Error';
    case 502: return 'Bad Gateway';
    case 503: return 'Service Unavailable';
    case 504: return 'Gateway Timeout';
    default: return 'Error';
  }
};

/**
 * @typedef {Object} Request
 * @property {Object} params
 * @property {Object} body
 * @property {Object} query
 *
 * @typedef {Object} Response
 * @property {(json: any) => Response} send
 * @property {(code: number) => Response} status
 * @property {(json: Object) => Response} json
 */
class ClassController {
  /**
   * Class Controller
   * @constructor
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  constructor(req, res, next) {
    /** @type {Request} */
    this.request = req;
    /** @type {Response} */
    this.response = res;
    /** @type {Function} */
    this.next = next;
  }

  /**
   * Expect Error
   * @param {Function} callback
   */
  Expectation(callback) {
    try {
      callback();
    } catch (error) {
      this.getFailure(500, error);
    }
  }

  /**
   * Response Success Data
   * @param {number} code
   * @param {*} data
   */
  getSuccess(code, data) {
    const dataResponse = {
      data,
      code,
      status: codeStatus(code),
    };
    this.response.json(dataResponse);
  }

  /**
   * Response Error Data
   * @param {number} code
   * @param {*} error
   */
  getFailure(code, error) {
    console.log(error);
    const errorResponse = {
      error,
      code,
      status: codeStatus(code),
    };
    this.res.status(code).send(errorResponse);
  }

  getList() {
    this.Expectation(async () => {
      const lists = await this.Model.collection().fetch();
      await this.getSuccess(200, lists);
    });
  }

  getByID() {
    const { id } = this.request.params;
    this.Expectation(async () => {
      const data = await this.Model
        .collection()
        .query({ where: { [this.primaryKey]: id } })
        .fetchOne();
      await this.getSuccess(200, data);
    });
  }

  postByID() {
    const { body } = this.request;
    this.Expectation(async () => {
      const data = await this.Model.create(body);
      await this.getSuccess(201, data);
    });
  }
}

export default ClassController;

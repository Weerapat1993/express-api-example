class ClassController {
  constructor(req, res, next) {
    this.request = req;
    this.response = res;
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
   * @param {*} data
   */
  getSuccess(data) {
    const dataResponse = {
      data,
      code: 200,
      status: 'Success',
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
      status: 'Error',
    };
    this.res.status(code).send(errorResponse);
  }

  getList() {
    this.Expectation(async () => {
      const lists = await this.Model.fetch();
      await this.getSuccess(lists);
    });
  }

  getByID() {
    const { id } = this.request.params;
    this.Expectation(async () => {
      const data = await this.Model.query({ where: { [this.primaryKey]: id } }).fetchOne();
      await this.getSuccess(data);
    });
  }
}

export default ClassController;

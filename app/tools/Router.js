import express from 'express';

const router = express.Router();

class Router {
  constructor(req, res, next) {
    this.request = req;
    this.response = res;
    this.next = next;
  }

  /**
   * Rotuer Method GET
   * @param {string} path
   * @param {(request, response, next) => void} callback
   */
  get(path, callback) {
    router.get(path, callback)
  }

  /**
   * Rotuer Method POST
   * @param {string} path
   * @param {(request, response, next) => void} callback
   */
  post(path, callback) {
    router.post(path, callback)
  }

  /**
   * Rotuer Method PUT
   * @param {string} path
   * @param {(request, response, next) => void} callback
   */
  put(path, callback) {
    router.put(path, callback)
  }

  /**
   * Rotuer Method DELETE
   * @param {string} path
   * @param {(request, response, next) => void} callback
   */
  delete(path, callback) {
    router.delete(path, callback)
  }
}

export default Router;

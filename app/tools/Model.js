class Models {
  // Bookshelf
  collection() {
    return this;
  }

  fetch() {
    return this;
  }

  fetchOne() {
    return this;
  }

  query() {
    return this;
  }

  save() {
    return this;
  }

  // Bookshelf-ModelBase
  create() {
    return this;
  }

  destroy() {
    return this;
  }

  findAll() {
    return this;
  }

  findById() {
    return this;
  }

  findOne() {
    return this;
  }

  /**
  * Select a model based on data and insert if not found
  * @param {Object} data
  * @param {Object} [options] Options for model.fetch and model.save
  * @param {Object} [options.defaults] Defaults to apply to a create
  * @return {Promise} single Model
  */
  findOrCreate(data, options) {
    return this;
  }

  update() {
    return this;
  }

  upsert() {
    return this;
  }
}


/** @type {Models} */
const Model = {};

export default Model;

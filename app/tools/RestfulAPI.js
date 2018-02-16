const RestfulAPI = (req, res, Model) => {
  Model.select('*')
    .then((data) => {
      const dataResponse = {
        data,
        code: 200,
        status: 'OK',
      };
      res.json(dataResponse);
    })
    .catch((err) => {
      const errorResponse = {
        error: err,
        code: 500,
        status: 'Error',
      };
      res.status(500).send(errorResponse);
    });
};

export default RestfulAPI;

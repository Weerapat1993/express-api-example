export const SuccessCase = data => ({
  data,
  code: 200,
  status: 'Success',
});

export const ErrorCase = error => ({
  error,
  code: 500,
  status: 'Error',
});

export const APIExpection = (res, callback) => {
  try {
    callback();
  } catch (error) {
    console.log(error);
    res.status(500).send(ErrorCase(error));
  }
};

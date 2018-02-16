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


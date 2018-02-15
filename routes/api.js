import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  const dataResponse = {
    data: {
      path: '/',
    },
    code: 200,
    status: 'OK',
  };
  res.send(dataResponse);
});

module.exports = router;

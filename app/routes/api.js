import express from 'express';
import { ProductContainer } from '../controllers';

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

router.get('/products', ProductContainer.getAllProduct);

export default router;

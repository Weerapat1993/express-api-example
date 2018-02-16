import express from 'express';
import {
  ProductController,
  ShopController,
  PurchaseController,
  RequestController,
} from '../controllers';

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

router.get('/products', ProductController.getAllProduct);
router.get('/shops', ShopController.getAllShop);
router.get('/purchases', PurchaseController.getAllPurchase);
router.get('/requests', RequestController.getAllRequest);

export default router;

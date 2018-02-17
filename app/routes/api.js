import express from 'express';
import {
  Route,
  ProductController,
  ShopController,
  PurchaseController,
  RequestController,
} from '../controllers';

const router = express.Router();

// Products
router.get('/products', Route(ProductController, 'index'));
router.get('/products/:id', Route(ProductController, 'getByID'));

// Shops
router.get('/shops', Route(ShopController, 'getList'));
router.get('/shops/:id', Route(ShopController, 'getByID'));

// Purchases
router.get('/purchases', (req, res, next) => new PurchaseController(req, res, next).getList());
router.get('/purchases/:id', (req, res, next) => new PurchaseController(req, res, next).getByID());

// Requests
router.get('/requests', Route(RequestController, 'getList'));
router.get('/requests/:id', Route(RequestController, 'getByID'));

export default router;

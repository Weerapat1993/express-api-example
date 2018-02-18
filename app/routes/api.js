import express from 'express';
import { Route } from '../controllers';

const router = express.Router();

// Products
router.get('/products', Route('ProductController', 'index'));
router.get('/products/:id', Route('ProductController', 'getByID'));
router.post('/products', Route('ProductController', 'postByID'));

// Shops
router.get('/shops', Route('ShopController', 'getList'));
router.get('/shops/:id', Route('ShopController', 'getByID'));
router.post('/shops', Route('ShopController', 'postByID'));

// Purchases
router.get('/purchases', Route('PurchaseController', 'getList'));
router.get('/purchases/:id', Route('PurchaseController', 'getByID'));
router.post('/purchases', Route('PurchaseController', 'postByID'));

// Requests
router.get('/requests', Route('RequestController', 'getList'));
router.get('/requests/:id', Route('RequestController', 'getByID'));
router.post('/requests', Route('RequestController', 'postByID'));

export default router;

import express from 'express';
import { Route } from '../app/controllers';

const router = express.Router();

// Articles
router.get('/articles', Route('ArticleController', 'getList'));
router.get('/articles/:id', Route('ArticleController', 'getByID'));
router.post('/articles', Route('ArticleController', 'postByID'));
router.put('/articles', Route('ArticleController', 'updateByID'));
router.delete('/articles', Route('ArticleController', 'deleteByID'));

// Refund
router.get('/refund-orders/:id', Route('RefundController', 'byID'));
router.put('/refund-orders', Route('RefundController', 'update'));

// Users
router.get('/users/token', Route('UserController', 'getAuthResponse'));
router.post('/users', Route('UserController', 'createData'));

export default router;

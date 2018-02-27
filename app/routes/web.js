import express from 'express';
import passport from 'passport';
import { Route } from '../controllers';

const router = express.Router();

// Facebook App Login
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/' }));

router.get('/profile', Route('UserController', 'authFacebook'));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;

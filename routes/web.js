import express from 'express';
import passport from 'passport';
import { Route } from '../app/controllers';

const router = express.Router();

// Facebook App Login
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/' }));

router.get('/profile', Route('UserController', 'authFacebook'));
router.get('/getAuthResponse', Route('UserController', 'getAuthResponse'));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;

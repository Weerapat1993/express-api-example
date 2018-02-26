import express from 'express';
import passport from 'passport';

const router = express.Router();

// Facebook App Login
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/' }));
router.get('/profile', (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;

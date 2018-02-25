import express from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { web, api } from './app/routes';
import { codeStatus } from './app/controllers/Controller';

const CLIENT_ID = 'client id จาก facebook';
const CLIENT_SECRET = 'client secret จาก facebook';

// App Express
const app = express();

// Set passport
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
passport.use(new FacebookStrategy(
  {
    clientID: 1028852790492705,
    clientSecret: '0dd2509758802bdf54a3d2b034dc07b8',
    callbackURL: 'http://localhost:8000/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'name', 'emails', 'gender', 'photos'],
  },
  (accessToken, refreshToken, profile, done) => {
    // ส่วนนี้จะเอาข้อมูลที่ได้จาก facebook ไปทำอะไรต่อก็ได้
    done(null, profile);
  },
));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', web);
app.use('/api', api);

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/' }));
app.get('/profile', (req, res) => {
  res.json(req.user);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // response status code
  const code = err.status || 500;
  res.status(code);

  // render the error page
  // res.render('error');

  // response json error
  res.send({
    error: err.message,
    code,
    status: codeStatus(code),
  });
});

module.exports = app;

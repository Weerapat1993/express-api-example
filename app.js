import express from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { web, api } from './app/routes';
import { codeStatus } from './app/controllers/Controller';
import { FACEBOOK_CONFIG } from './app/config/facebook';

// App Express
const app = express();

// Set passport
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
passport.use(new FacebookStrategy(FACEBOOK_CONFIG, (accessToken, refreshToken, profile, done) => {
  // ส่วนนี้จะเอาข้อมูลที่ได้จาก facebook ไปทำอะไรต่อก็ได้
  const user = profile;
  const { email } = user._json;
  const payload = { email };
  user.token = jwt.sign(payload, 'secret');
  done(null, user);
}));

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

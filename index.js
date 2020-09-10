const twilio = require('twilio');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const Router = express.Router;
const noCopsRouter = require('./noCopsRouter');

const router = new Router();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// GET: / - home page
router.get('/', (req, res) => {
  res.render('index');
});

router.use('/nocops', twilio.webhook({validate: false}), noCopsRouter);

app.use(router);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const server = app.listen("8080", function() {
console.log('Express server listening on port ' + server.address().port);
});
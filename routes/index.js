var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var API = process.env.MY_API_KEY
  res.render('index', { title: 'Express', API: API });
});


/* GET events page. */
router.get('/events', function(req, res, next) {
  res.render('events');
});

/* GET quiz page. */
router.get('/zenquiz', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  var message = "Hello, " + name
  res.render('zenquiz', { message: message });
});

/* GET zenquiz page. */
router.get('/zenquiz', function(req, res, next) {
  res.render('zenquiz');
});

/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus');
});

/* GET yoga page. */
router.get('/yoga', function(req, res, next) {
  res.render('yoga');
});

/* GET meditation page. */
router.get('/meditation', function(req, res, next) {
  res.render('meditation');
});

/* GET gardening page. */
router.get('/gardening', function(req, res, next) {
  res.render('gardening');
});


module.exports = router;

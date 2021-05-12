var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //the following API variable grabs the API key from the .env file
  //Need to enable "require('dotenv').config();" in app.js file beforehand
  var API = process.env.MY_API_KEY;
  res.render('index', {API: API});
});

/* GET events page. */
router.get('/events', function(req, res, next) {
  res.render('events');
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
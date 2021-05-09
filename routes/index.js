var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

module.exports = router;

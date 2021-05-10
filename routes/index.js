var express = require('express');
var router = express.Router();

    
//Creating event data array https://www.valentinog.com/blog/html-table/
var events = [
  {lat: 38.858327, long: -77.022459, id: 'A', title: 'Power Yoga Class', link: "https://www.eventbrite.com/e/power-yoga-class-tickets-152593648711?aff=ebdssbdestsearch", location: "Hains Point • Washington, DC", date: "Jun 06"},
  {lat: 38.7656065, long: -77.4052482, id: 'B', title: 'Yoga in Paradise', link: "https://www.eventbrite.com/e/yoga-in-paradise-tickets-151677185545?aff=ebdssbdestsearch", location: "Paradise Springs Winery • Clifton, VA", date: "Jun 25"},
  {lat: 38.7991022, long: -77.4458756, id: 'C', title: 'Rooftop Yoga and Beer', link: "https://www.eventbrite.com/e/rooftop-yoga-and-beer-tickets-152796663935?aff=ebdssbdestsearch", location: "Eavesdrop Brewery • Manassas, VA", date: "May 15"},
  {lat: 38.892037, long: -77.036816, id: 'D', title: 'Falun Dafa Meditation', link: "https://www.eventbrite.com/e/free-falun-dafa-meditation-exercises-demo-and-teaching-sunday-tickets-152230165523?aff=ebdssbdestsearch", location: "National Mall • Washington, DC", date: "May 16"},
  {lat: 38.90862999999999, long: -76.998019, id: 'E', title: 'Mindful Meditation Sound Bath', link: "https://www.eventbrite.com/e/mindful-meditation-sound-bath-presented-by-synergy-and-serenity-tickets-151798574623?aff=ebdssbdestsearch", location: "Union Market • Washington, DC", date: "May 12"},
  {lat: 38.9024447, long: -76.98228280000001, id: 'F', title: 'Learn the art of Bonsai, Indoor Gardening and Hydroponics Farming', link: "https://www.eventbrite.com/e/bon-chi-learn-and-practice-the-art-of-bonsai-using-edible-plants-tickets-86238609001?aff=ebdssbdestsearch", location: "H St. Farms • Washington, DC", date: "May 23"}
];


/* GET home page. */
router.get('/', function(req, res, next) {
  var API = process.env.MY_API_KEY
  res.render('index', { title: 'Express', API: API, events: events});
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

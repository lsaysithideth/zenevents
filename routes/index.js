var express = require('express');
var router = express.Router();

    
//Creating events data array https://www.valentinog.com/blog/html-table/
var events = [
  {lat: 38.858327, long: -77.022459, id: 'A', title: 'Power Yoga Class', link: "https://www.eventbrite.com/e/power-yoga-class-tickets-152593648711?aff=ebdssbdestsearch", location: "Hains Point • Washington, DC", date: "Jun 06", img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133571817%2F318980700499%2F1%2Foriginal.20210427-220421?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1dd6aa994f09fa1281769dc8d035b9ab", keywords: "yoga"},
  {lat: 38.7656065, long: -77.4052482, id: 'B', title: 'Yoga in Paradise', link: "https://www.eventbrite.com/e/yoga-in-paradise-tickets-151677185545?aff=ebdssbdestsearch", location: "Paradise Springs Winery • Clifton, VA", date: "Jun 25", img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132809217%2F75222167911%2F1%2Foriginal.20210420-155131?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C13%2C1080%2C540&s=41dce3d2d185ab7c00f7897d0d0c6786", keywords: "yoga"},
  {lat: 38.7991022, long: -77.4458756, id: 'C', title: 'Rooftop Yoga and Beer', link: "https://www.eventbrite.com/e/rooftop-yoga-and-beer-tickets-152796663935?aff=ebdssbdestsearch", location: "Eavesdrop Brewery • Manassas, VA", date: "May 15", img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133729429%2F457048725368%2F1%2Foriginal.20210429-032949?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1325%2C3024%2C1512&s=2d62d8baaa64b1a66e6ba55d82060ab3", keywords: "yoga"},
  {lat: 38.892037, long: -77.036816, id: 'D', title: 'Falun Dafa Meditation', link: "https://www.eventbrite.com/e/free-falun-dafa-meditation-exercises-demo-and-teaching-sunday-tickets-152230165523?aff=ebdssbdestsearch", location: "National Mall • Washington, DC", date: "May 16", img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133275049%2F209248159228%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C4%2C412%2C206&s=bfd900ed52e1796832c5532cefeeb7de", keywords: "meditation"},
  {lat: 38.90862999999999, long: -76.998019, id: 'E', title: 'Mindful Meditation Sound Bath', link: "https://www.eventbrite.com/e/mindful-meditation-sound-bath-presented-by-synergy-and-serenity-tickets-151798574623?aff=ebdssbdestsearch", location: "Union Market • Washington, DC", date: "May 12", img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133213121%2F534916167481%2F1%2Foriginal.20210423-221510?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=3%2C0%2C1370%2C685&s=498a8647231b9d63091406663348b61f", keywords: "meditation"},
  {lat: 38.9024447, long: -76.98228280000001, id: 'F', title: 'Learn the art of Bonsai, Indoor Gardening and Hydroponics Farming', link: "https://www.eventbrite.com/e/bon-chi-learn-and-practice-the-art-of-bonsai-using-edible-plants-tickets-86238609001?aff=ebdssbdestsearch", location: "H St. Farms • Washington, DC", date: "May 23", img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84591823%2F139309848206%2F1%2Foriginal.20190822-130010?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C3%2C960%2C480&s=ea2baaf81789143f9d5396b38f469ece", keywords: "gardening"}
];


/* GET home page. */
router.get('/', function(req, res, next) {
  //the following API variable grabs the API key from the .env file
  //Need to enable "require('dotenv').config();" in app.js file beforehand
  var API = process.env.MY_API_KEY
  res.render('index', {API: API, events: JSON.stringify(events)});
});

/* GET events page. */
router.get('/events', function(req, res, next) {
  res.render('events', {events: JSON.stringify(events)});
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

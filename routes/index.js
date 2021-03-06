var express = require('express');
var router = express.Router();

//Creating events data array https://www.valentinog.com/blog/html-table/
var events = [
  {lat: 38.7991022, long: -77.4458756, id: 'A', title: 'Rooftop Yoga and Beer', link: 'https://www.eventbrite.com/e/rooftop-yoga-and-beer-tickets-152796663935?aff=ebdssbdestsearch', location: 'Eavesdrop Brewery • Manassas, VA', date: "May 15", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133729429%2F457048725368%2F1%2Foriginal.20210429-032949?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1325%2C3024%2C1512&s=2d62d8baaa64b1a66e6ba55d82060ab3s', keywords: 'yoga'},								
  {lat: 39.00933935, long: -77.4298073, id: 'B', title: 'Beyond Breath - SKY Breadth Meditation', link: 'https://www.eventbrite.com/e/beyond-breath-an-introduction-to-sky-breath-meditation-sterling-tickets-152571693041?aff=ebdssbdestsearch', location: 'Sterling • Sterling, VA', date: "May 15", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133552853%2F465295460231%2F1%2Foriginal.20200807-053241?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C2%2C1570%2C785&s=a1da2875a26c6656b09f3ed4cb970efc', keywords: 'meditation'},								
  {lat: 38.99444789, long: -77.02134169, id: 'C', title: 'Yoga on the Farm', link: 'https://www.eventbrite.com/e/yoga-on-the-farm-tickets-150970818783?aff=ebdssbdestsearch', location: 'CKC Urban Farm • Silver Spring, MD', date: "May 16", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132232665%2F178498572376%2F1%2Foriginal.20210414-193844?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C176%2C1680%2C840&s=7f714d14e321dc5cd54fe3588895355c', keywords: 'yoga'},								
  {lat: 38.892037, long: -77.036816, id: 'D', title: 'Falun Dafa Meditation', link: 'https://www.eventbrite.com/e/free-falun-dafa-meditation-exercises-demo-and-teaching-sunday-tickets-152230165523?aff=ebdssbdestsearch', location: 'National Mall • Washington, DC', date: "May 16", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133275049%2F209248159228%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C4%2C412%2C206&s=bfd900ed52e1796832c5532cefeeb7des', keywords: 'meditation'},								
  {lat: 38.7183900569692, long: -77.1380148170767, id: 'E', title: 'Farm Tonic 2021', link: 'https://www.eventbrite.com/e/farm-tonic-2021-tickets-153012104323?aff=ebdssbdestsearch', location: 'Arcadia at Woodlawn • Alexandria, VA', date: "May 16", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133901543%2F60838421591%2F1%2Foriginal.20210430-135951?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=183a963866bd014095cf760b5898b77f', keywords: 'gardening'},								
  {lat: 38.6139769609312, long: -76.9144333728979, id: 'F', title: 'Plant Night at Blue Dyer Distilling', link: 'https://www.eventbrite.com/e/plant-night-at-blue-dyer-distilling-co-waldorf-tuesday-5182021-at-6-tickets-153698328839?aff=ebdssbdestsearch', location: 'BlueDyer Distilling Co. • Waldorf, MD', date: "May 18", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F134431723%2F504500523983%2F1%2Foriginal.20210505-181618?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C268%2C1200%2C600&s=ade8022b313f0231b1c0f3944f41a20b', keywords: 'gardening'},								
  {lat: 38.90863, long: -76.998019, id: 'G', title: 'Mindful Meditation Sound Bath', link: 'https://www.eventbrite.com/e/mindful-meditation-sound-bath-presented-by-synergy-and-serenity-tickets-151798574623?aff=ebdssbdestsearch', location: 'Union Market • Washington, DC', date: "May 19", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133213121%2F534916167481%2F1%2Foriginal.20210423-221510?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=3%2C0%2C1370%2C685&s=498a8647231b9d63091406663348b61fs', keywords: 'meditation'},								
  {lat: 38.9024447, long: -76.9822828, id: 'H', title: 'Learn the art of Bonsai', link: 'https://www.eventbrite.com/e/bon-chi-learn-and-practice-the-art-of-bonsai-using-edible-plants-tickets-86238609001?aff=ebdssbdestsearch', location: 'H St. Farms • Washington, DC', date: "May 23", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84591823%2F139309848206%2F1%2Foriginal.20190822-130010?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C3%2C960%2C480&s=ea2baaf81789143f9d5396b38f469eces', keywords: 'gardening'},								
  {lat: 38.7656065, long: -77.4052482, id: 'I', title: 'Yoga in Paradise', link: 'https://www.eventbrite.com/e/yoga-in-paradise-tickets-151677185545?aff=ebdssbdestsearch', location: 'Paradise Springs Winery • Clifton, VA', date: "Jun 25", img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132809217%2F75222167911%2F1%2Foriginal.20210420-155131?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C13%2C1080%2C540&s=41dce3d2d185ab7c00f7897d0d0c6786s', keywords: 'yoga'}								
];

/* GET home page. */
router.get('/', function(req, res, next) {
  //the following API variable grabs the API key from the .env file
  //Need to enable "require('dotenv').config();" in app.js file beforehand
  var API = process.env.MY_API_KEY;
  res.render('index', { title: 'Express', API: API, events: JSON.stringify(events) });
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
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
}); // this routes localhost:3000/ to the index file
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'about us' });
}); // this routes localhost:3000/aboutus to the about us file
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'help' });
}); // this routes localhost:3000/help to the help file




module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page.*/
router.get('/', function(req, res) {
  res.render('front/home', { title: 'Tenon Foods' });
  //res.redirect('/catalog');
});
/* GET dashboard page. */
router.get('/dashboard', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.redirect('/catalog');
});

module.exports = router;

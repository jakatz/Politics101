var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Politics 101' });
});

router.post('')


router.post('/test', function(req, res) {
  console.log(req.body);
  res.render('user', req.body);
});

module.exports = router;

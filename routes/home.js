var express = require('express');
var router = express.Router();
var db = require('../models');

/* loads the models module. */
var db = require('../models')

exports.index = function(req, res){
  db.User.findAll({
    include: [ db.User ]
  }).success(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    })
  })
}


/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Politics 101' });
});

router.post('/test', function(req, res) {
  console.log(req.body);
  res.render('user');
});

module.exports = router;

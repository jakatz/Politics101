var mongoose = require('mongoose');
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


var Schema = mongoose.Schema;

var usersSchema = new Schema({
    user: String,
    pass: String,
    loc: String
});

var User = mongoose.model('users', usersSchema);




/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Politics 101' });
});

router.post('/user', function(req, res){
  res.redirect('/user/' + req.body.user);
});

router.get('/user/:name', function(req, res) {
  console.log(req.params)
  res.render('user', req.params);
});

router.get('/create',function(req,res){
  res.render('create');
});

router.post('/create', function(req, res){
  new User( req.body ).save(function(err, user) {
    if(err) res.json(err);
    res.redirect('/user/' + user.user);
  });
});

// router.param('name', function (req, res, next, name) {
// User.find({name: name},function (err, docs) {
//   req.user.docs=docs[0];
//   next();
// });
// });

// router.get('/user/:name', function(req, res){
//   console.log(req.params);
//   res.render('user', req.params);
// });



module.exports = router;

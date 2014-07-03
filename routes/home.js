var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

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

router.get('https://www.googleapis.com/civicinfo/us_v1/representatives/lookup/AIzaSyAlys4qOEvvXwEbtoim0OCsFki_JL-hSQg', function(req, res){
  res.send(req);
})

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

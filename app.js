var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var civicInfo = require("civic-info")({apiKey: 'AIzaSyAlys4qOEvvXwEbtoim0OCsFki_JL-hSQg'});

var mongoose = require('mongoose');
var fs = require('fs');

var home = require('./routes/home');

var app = express();

// API Usage
// civicInfo.representativeInfo({address: '611 Mission St, San Francisco'}, function(error, data) {
//     console.log(data);
// });

app.post('https://www.googleapis.com/civicinfo/us_v1/representatives/lookup/AIzaSyAlys4qOEvvXwEbtoim0OCsFki_JL-hSQg')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/civicappDB');

app.use('/', home);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

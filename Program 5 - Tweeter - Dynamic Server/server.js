/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Santosh Ramesh
 * Email: rameshsa@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');



var twitData = require('./twitData');
//console.log(twitData);

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


// the get function
app.get('/', function (req, res, next) {
  console.log("==/", twitData);
  res.status(200).render('twitPage', {text: twitData});
});

app.get('/index', function (req, res, next) {
  res.status(200).render('twitPage', {
    text: twitData
  });
});


app.get('/twits/:twitNumber', function (req, res, next) {
  var twitNumber = req.params.twitNumber;
  if (twitData[twitNumber]) {
    console.log(twitData[twitNumber]);
    res.status(200).render('one_twit', twitData[twitNumber]);
  } else {
    next();
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});


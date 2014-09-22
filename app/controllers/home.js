var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.TwitTwoo.findAll().success(function (TwitTwoo) {
    res.render('index', {
      title: 'My TwitTwoos',
      TwitTwoo: TwitTwoo
    });
  });
});

router.get('/postnewtwoo/new', function(request, response) {
  response.send('This page exists, dammit');
db.TwitTwoo.create({
  TwitTwoo: 'hello world',
  url: "http://godeverythingsbroken.com"
})
  .complete(function(err) {
    if (!!err) {
      console.log('The instance has not been saved:', err)
    } else {
      console.log('We have a persisted instance now')
    }
  })
  });
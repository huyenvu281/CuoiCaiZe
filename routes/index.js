var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  var connection = require('../connect/connection');
  var modelContent = require('../model/content');

  var uuid_v1 = uuid.v1();
  console.log(uuid_v1);

  var uuid_v4 = uuid.v4();
  console.log(uuid_v4);

  var promise = new Promise(function(resolve, reject) {
      connection.data.selectContentHomePage();
      resolve(true);
      reject(false);
  });

  promise.then(function(result) {
      console.log('Success: ' + result);
  }).catch(function(error) {
      console.log('Error: ' + error);
  });

  var content_data = modelContent.data;
  console.log(content_data);

  res.render('index', { content: JSON.stringify(content_data)});
});

module.exports = router;

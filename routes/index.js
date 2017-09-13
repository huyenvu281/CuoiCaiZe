var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var connection = require('../connect/connection');

/* GET home page. */
router.get('/', function(req, res, next) {

  var uuid_v1 = uuid.v1();
  console.log(uuid_v1);

  var uuid_v4 = uuid.v4();
  console.log(uuid_v4);

  connection.data.insertContent();

  res.render('index', { title: 'Express' });
});

module.exports = router;

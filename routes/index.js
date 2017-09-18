var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  var uuid_v1 = uuid.v1();
  console.log(uuid_v1);

  var uuid_v4 = uuid.v4();
  console.log(uuid_v4);

  res.render('index', { content: JSON.stringify("content_data")});
});

router.post('/getIndex', function (req, res) {
    var connection = require('../connect/connection');
    var modelContent = require('../model/content');
    console.log("Get Index");

    connection.data.selectContentHomePage(0, 10);

    var content_data = modelContent.data;

    var obj = {
        content_id: '',
        content_user_id: '',
        content_type: '',
        content_title: '',
        content_detail: ''
   };

    var data = [];

    for(var i = 0; i < content_data.length; i++){
        obj.content_id = content_data[i].Content_ID;
        obj.content_user_id = content_data[i].Content_User_ID;
        obj.content_type = content_data[i].Content_Type;
        obj.content_title = content_data[i].Content_Title;
        obj.conten_detail = content_data[i].Content_Detail;
        data.push(obj);
    };

   this.body = data;
   console.log(data);

   res.send(this.body);
});

module.exports = router;

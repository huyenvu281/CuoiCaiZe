var mysql = require('mysql');
var uuid = require('uuid');
var modelContent = require("../model/content");

var connection = mysql.createConnection({
    //Properties...
    host:'127.0.0.1',
    user:'root',
    password:'tvn28185',
    database: 'cuoicaize'
});

connection.connect(function (error) {
    if(error)
        throw error;
    else
        console.log("MySql connected")
});

var methods = {
    insertContent:  function () {
        var uuid_v4 = uuid.v4();
        uuid_v4 = uuid_v4.replace(/-/g,"");
        //about mysql
        var sql = "INSERT INTO content (Content_ID, Content_User_ID, Content_Type, Content_Title, Content_Detail, Content_Del, Content_Note) " +
            "VALUES ('" + uuid_v4 + "', 'USER', 'TYPE', 'TITLE', 'DETAIL', 'DEL', 'NOTE')";
        console.log(sql);
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        })
    },

    selectContentHomePage: function () {
        var sql = "SELECT * FROM content ";
        console.log(sql);
        connection.query(sql, function (err, result) {
            if (err) throw err;
            modelContent.data = result;
        });
    }
};

exports.data = methods;
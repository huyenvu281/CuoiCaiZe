var mysql = require('mysql');

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
        //about mysql
        var sql = "INSERT INTO content (Content_ID, Content_User_ID, Content_Type, Content_Title, Content_Detail, Content_Del, Content_Note) " +
            "VALUES ('ID', 'USER', 'TYPE', 'TITLE', 'DETAIL', 'DEL', 'NOTE')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        })
    }
};

exports.data = methods;


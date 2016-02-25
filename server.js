/**
 * File Upload Play Server v0.0.1
 * @type {*|exports|module.exports}
 */

//modules
var express = require('express');
var multer = require('multer');
var colors = require('colors');

//objects
var app = express();

var storage = multer.diskStorage({
    //where should the files go?
    destination: function(request, file, callback) {
        callback(null, './uploads/');
    },
    //
    filename: function(request, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({storage: storage}).single('userPhoto');

//routes
app.get('/', function(request, response){
    response.sendFile(__dirname + "/public/index.html");
});

app.post('/api/photo', function(request, response){

    upload(request, response, function(error){

        if(error){
            return response.end('error uploading file.');
        }

        response.end('file has been uploaded.');
    });
});

// start server
app.listen(3000, function(){
    console.log("working on port " + colors.rainbow("3000"));
});


var express = require('express');
var app = express();
var path = require('path');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/notes", function (req, res)
{
    var notes = [
        {text: "First note"},
        {text: "Second note"},
        {text: "Third note"}
    ];
    res.send(notes);
});

app.listen(8080);

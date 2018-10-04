var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var notes_init = [
    {text: "First note"},
    {text: "Second note"},
    {text: "Third note"}
];
var bodyParser = require('body-parser');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db = new Db('tutor',
    new Server("localhost", 27017, {safe: true},
        {auto_reconnect: true}, {}));

db.open(function(err){
    if (err) console.log(err);
    else console.log("mongo db is opened!");
});
db.collection('notes', function(error, notes) {
    db.notes = notes;
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(session({
    secret: 'angular_tutorial',
    resave: true,
    saveUninitialized: true
}));

app.get("/notes", function(req,res) {
    db.notes.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});

app.post("/notes", function(req,res) {
    db.notes.insert(req.body).then(function() {
        res.end();
    });
});

app.listen(8080);

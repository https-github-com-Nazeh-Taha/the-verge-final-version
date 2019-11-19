const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const Article = require("../data/db.js").Article;
const Auther = require("../data/db.js").Auther;
//------DataBase---------------------
const URI = require('../config/keys').mongoURI;
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
//-------DB Connect-------------------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  console.log("we're connected!");
});


app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/article/:id", (req, res) => {
  var auth_id = "5dc9b092a15d1f8a5d3fd345";
  var id = req.params.id;
  Promise.all([
    Article.find({auth_id: auth_id}).limit(5),
    Article.find({_id: id}),
    Auther.find({_id: auth_id})
  ]).then(authers => res.json(authers))
  
});

// app.get('/article', function(req, res){
//   Promise.all([
//   Article.find({auth_id: "5dc9b092a15d1f8a5d3fd345"}).limit(5),
//   Article.find({_id: "5dc9c822bf4abd8c9eea9f24"}),
//   Auther.find({_id: "5dc9b092a15d1f8a5d3fd345"})
// ]).then(authers => res.json(authers));
// });



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public"));
});



app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});
var express = require("express");
var request = require('request');
var path = require("path");
var http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const Article = require("./data/db.js").Article;
const Auther = require("./data/db.js").Auther;
var dbDeals = require('./data/db.js').Deal;
const CommentDB = require('./data/db.js');
var RecomModel = require('./data/db.js');
//------DataBase---------------------
const URI = require('./config/keys').mongoURI;
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
app.use(express.static(path.join(__dirname, "/")));
//----------post----------------
app.get("/article/:id", (req, res) => {
  var auth_id = "5dc9b092a15d1f8a5d3fd345";
  var id = req.params.id;
  Promise.all([
    Article.find({auth_id: auth_id}).limit(5),
    Article.find({_id: id}),
    Auther.find({_id: auth_id})
  ]).then(authers => res.json(authers))
  
});
//-----------deals-------
app.get('/deals/', (req, res) => {
  dbDeals.find({}).limit(3)
  .then(deals => res.json(deals))
  .catch(err => res.status(400).json('error',err));
});

//---------------Comments----------------
app.get('/comments/:id', (req, res) => {
  var id = req.params.id;
  console.log(id);
  CommentDB.CommentModel.find({postId: id }, function(err, data){
    if (err) {
      console.log('Error');
    }
    res.json(data);
  })
 });
//---------------recom------------------
 app.get("/recom/:id", (req, res) => {
  const id = req.params.id;
  Article.find({ _id: id }, { topic: 1 })
    .then(data => {
      var searchedTopic = data[0].topic;
      Article.find({ topic: searchedTopic })
        .limit(6)
        .then(data => {
          res.json(data);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log("Error : " + err));
 
 });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

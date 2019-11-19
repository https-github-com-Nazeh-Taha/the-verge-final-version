const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to database
// var mongoose = require('mongoose');
// const URI = require('../config/keys.js');
// mongoose.connect(URI.mongoURI, {useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("We're Connected");
// });


const commentSchema = Schema({
	postId: {
		type: String
	},
  profilePic:{
    type: String
  },
  autherName: {
    type: String
  } ,
  createdAt: {
    type: String,
    // default: Date.now
  },
  body:{
    type: String
  } 
});

const CommentModel = mongoose.model('comments', commentSchema);

// findAll retrieves all comments
function findAll(callback) {
    CommentModel.find({}, callback);
}

// insertOne inserts a comment into the db
function insertOne(comment, callback) {
    CommentModel.create(comment, callback);
}

//populate data to database:
function saveData (data){

  for(var i = 0; i < data.length; i++){
		var postId = data[i].postId;
    var profilePic = data[i].profilePic;
    var autherName = data[i].autherName;
    var createdAt = data[i].createdAt;
    var body = data[i].body;

    var newComment = new CommentModel({
			postId : postId,
      profilePic : profilePic,
      autherName : autherName,
      createdAt : createdAt,
      body : body
		}) ;
		
		newComment.save();

    // commentModel.insertOne(newComment, function(err, result){
    //   if(err) {
    //     throw err;
    //   }
    //   console.log('data inserted in the db:' + result);
		// });
		
  }
    

}
var data  = [
	{
		postId:1,
		profilePic:"http://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
		autherName: 'Tass',
		createdAt: 'Nov 11, 2019 | 3:32 PM',
		body: 'If I found out someone were using this on me, I’d disassociate with them. This is overreaching and creepy.'
		
	},
	{
		postId:1,
		profilePic:"http://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
		autherName: 'Ashjan',
		createdAt: 'Nov 11, 2019 | 3:52 PM',
		body: 'This is the 2nd comment from dummy Data'
		
	},
	{
		postId:1,
		profilePic:"http://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
		autherName: 'Khamaisah',
		createdAt: 'Nov 11, 2019 | 3:32 PM',
		body: 'Foooooooood'
		
	},
	{
		postId:2,
		profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQJR6BqqLi6y004j182y-DQqexGNssQn5AHlZ7DUBXpYQe3H7P',
		autherName: 'nazih',
		createdAt: 'Nov 11, 2019 | 3:52 PM',
		body: 'This is the final comment from dummy Data'
		
	}
];

//saveData(data);

module.exports.CommentModel = CommentModel;
module.exports.findAll = findAll;
module.exports.insertOne = insertOne;
module.exports.saveData = saveData;

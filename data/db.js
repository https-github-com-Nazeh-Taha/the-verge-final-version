const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//--------------Auther db schema-----------
const AutherSchema = Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const Auther = mongoose.model('auther', AutherSchema);


//--------------Article db schema-------------
const ArticleSchema = Schema({
    auth_id: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    sammary: {
        type: String,
        required: true
    },
    img_url: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Article = mongoose.model('article', ArticleSchema);

//------------------Next topics db schema------------
const NextTopic = Schema({
    title: {
        type: String,
        require: true
    },
    title_url: {
        type: String,
        require: true
    }
})
const Topic = mongoose.model('topic', NextTopic);
var dealSchema = mongoose.Schema({
    img_url: {type: String, trim:true, unique: true},
    title: {type: String, trim:true, unique: true}
  });
  
var Deal = mongoose.model('Deal', dealSchema);

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

const RecomSchema = mongoose.Schema({
    title: String,
    img_url: String
  });

 const RecomModel =  mongoose.model("articles", RecomSchema);
  
module.exports.RecomModel = RecomModel;
module.exports.CommentModel = CommentModel;  
module.exports.Deal=Deal;
module.exports.Auther = Auther;
module.exports.Article = Article;
module.exports.Topic = Topic;
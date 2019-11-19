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

module.exports.Auther = Auther;
module.exports.Article = Article;
module.exports.Topic = Topic;
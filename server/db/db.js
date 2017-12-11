var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', {
    useMongoClient: true
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    author: ObjectId,
    content: String,
    title: String,
    author: String
});

var MyModel = mongoose.model('article', BlogPost);

module.exports = {
    MyModel
}

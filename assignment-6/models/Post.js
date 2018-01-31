const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema( {
  date : {
    type : String,
    require : true
  },
  postContent : {
    type : String,
    require : true
  },
  userID : {
    type : Schema.Types.ObjectId,
    ref : 'User1'
  },
  postCommentsID : [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
});

const Post = mongoose.model('Posts', postSchema);
module.exports = Post;

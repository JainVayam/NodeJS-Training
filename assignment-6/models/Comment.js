const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema( {
  date : {
    type : String,
    require : true
  },
  commentContent : {
    type : String,
    require : true
  },
  commentsPostID : {
    type : Schema.Types.ObjectId,
    ref: 'Posts' 
  },
  usersID : {
    type : Schema.Types.ObjectId,
    ref: 'User1'
  }
});

const Comment = mongoose.model('Comments', commentSchema);
module.exports = Comment;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( {
  firstName : {
    type : String,
    require : true
  },
  lastname :  {
    type : String,
    require : false
  },
  userPostID : [{
    type: Schema.Types.ObjectId, 
    ref: 'Posts'
  }],
  usersCommentId : [{
    type: Schema.Types.ObjectId, 
    ref : 'Comments'
  }]
});

const User = mongoose.model('User1', userSchema);
module.exports = User;

const Comment = require('../models/Comment');
const User = require('../models/User')
const Post = require('../models/Post')
const responseHelper = require('../applicationUtilities/responseHead')

const getComment = (req, res) => {
  Comment.findById(req.body._id, (err, commentData) => { 
    const objInfo = {
      message : err ? "Retreival Failed" : "Below are the comments",
      statusCode : err ? 400 : 200,
      responseReceived : response
    }
    responseHelper.respHandler(res, obj);
  });
}

const addComment = (req, res) => {
  const receivedData = req.body;
  const newComment = new Comment(receivedData);
  newComment.save((err) => {
    const objInfo = {
      message : err ? "Failed to add" : "Comment Added !!",
      statusCode : err ? 400 : 200
    }
    Post.findById(req.body.commentsPostID, (err, postData) => {
      postData.postCommentsID.push(newComment._id)
      const newCommentInfo = new Post(postData)
      newCommentInfo.save((err) => {
        const objInfo = {
          message : err ? "Failed to add " : "Post Added !!",
          statusCode : err ? 400 : 200
        }
      })
    });  
    User.findById(req.body.usersID, (err, userData) => {
      userData.usersCommentId.push(newComment._id)
      newPostCommentInfo = new User(userData)
      newPostCommentInfo.save((err) => {
        const objInfo = {
          message : err ? "Failed to add " : "Post Added !!",
          statusCode : err ? 400 : 200
        }
      })
    })
    responseHelper.respHandler(res, objInfo);
  });
}

const deleteComment = (req, res) => {
  Comment.remove({'_id' : req.body._id}, (err) => {
    const obj = {
      message : err ? "Failed to delete" : "Comment deleted !!",
      statusCode : err ? 400 : 200
    }
    responseHelper.respHandler(res, obj);
  });
}

const updateComment = (req, res) => {
  Comment.findByIdAndUpdate(req.body._id,  req.body, (err, response) => {
    const obj = {
      message : err ? "Failed to update" : "Updation Successful",
      statusCode : err ? 400 : 200 
    }
    responseHelper.respHandler(res, obj);
  });
}

module.exports = {
  getComment,
  addComment,
  deleteComment,
  updateComment
}


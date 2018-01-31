const User = require('../models/User')
const Post = require('../models/Post');
const Comment = require('../models/Comment')
const responseHelper = require('../applicationUtilities/responseHead')

const postByID = (req, res) => {
  Post.findOne({ _id: req.params['id'] }).populate('postCommentsID').exec((err, commentData) => { 
    const objInfo = {
      message : err ? "Retrieval Failed" : "Below are the Posts",
      statusCode : err ? 400 : 200,
      info : commentData
    }
    responseHelper.respHandler(res, objInfo);
  });
}   

const usersByPostID = (req, res) => {
  Post.findOne({'_id': '5a7069c5e915147dd3bb1ecf'}, (err, userData) => {
    const objInfo = {
      message : err ? "Retrieval Failed" : "Below is the user",
      statusCode : err ? 400 : 200,
      info : userData
    }
    responseHelper.respHandler(res, objInfo);
  });  
}

const addPost = (req, res) => {
  const receivedData = req.body;
  const newPost = new Post(receivedData);
  newPost.save((err) => {
    const objInfo = {
      message : err ? "Failed to add 1" : "Post Added !!",
      statusCode : err ? 400 : 200
    }
    const newPostEntry = req.body.userID;
    User.findById(newPostEntry, (err, userData) => {
      userData.userPostID.push(newPost._id)
      const newUserInfo = new User(userData);
      newUserInfo.save((err) => {
        const objInfo = {
          message : err ? "Failed to add " : "Post Added !!",
          statusCode : err ? 400 : 200
        }
      });  
    }); 
    responseHelper.respHandler(res, objInfo);
  });
}

const deletePost = (req, res) => {
  Post.remove({'_id' : req.body._id}, (err) => {
    const obj = {
      message : err ? "Failed to delete" : "Deleted Successfully",
      statusCode : err ? 400 : 200
    }
    responseHelper.respHandler(res, obj);
  });
}

const updatePost = (req, res) => {
  User.findByIdAndUpdate(req.body._id,  req.body, (err, response) => {
    const obj = {
      message : err ? "Failed to update" : "Updation Successful",
      statusCode : err ? 400 : 200 
    }
    responseHelper.respHandler(res, obj);
  });
}

module.exports = {
  postByID,
  addPost,
  deletePost,
  updatePost,
  usersByPostID
}


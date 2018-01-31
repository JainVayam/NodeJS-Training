const User = require('../models/User');
const Post = require('../models/Post');
const responseHelper = require('../applicationUtilities/responseHead')

const postsByUserID = (req, res) => {
  User.findOne({ _id: req.params['id'] }).populate('userPostID').exec((err, postData) => {
    const objInfo = {
      message : err ? "Retreival Failed" : "Following were found",
      statusCode : err ? 400 : 200,
      info : postData
    }
    responseHelper.respHandler(res, objInfo);
  });    
}

const addUser = (req, res) => {
  const receivedData = req.body;
  const newUser = new User(receivedData);
  newUser.save((err) => {
    const objInfo = {
      message : err ? "Failed to add " : "Added successfully",
      statusCode : err ? 400 : 200
    }
    responseHelper.respHandler(res, objInfo);
  });
}

const deleteUser = (req, res) => {
  User.remove({'_id' : req.body._id}, (err) => {
    const obj = {
      message : err ? "Failed to delete" : "Deleted Successfully",
      statusCode : err ? 400 : 200
    }
    responseHelper.respHandler(res, obj);
  });
}

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.body._id,  req.body, (err, response) => {
    const obj = {
      message : err ? "Failed to update" : "Updation Successful",
      statusCode : err ? 400 : 200 
    }
    responseHelper.respHandler(res, obj);
  });
}

module.exports = {
  postsByUserID,
  addUser,
  deleteUser,
  updateUser
}

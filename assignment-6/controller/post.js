const postService = require('../services/post')

const postByID = (req, res) => {
  postService.postByID(req, res);
}

const addPost = (req, res) => {
  postService.addPost(req, res);
}

const removePost = (req, res) => {
  postService.deletePost(req, res);
}

const changePost = (req, res) => {
  postService.updatePost(req, res); 
}

const usersByPostID = (req, res) => {
  postService.usersByPostID(req, res);
}

module.exports = {
  postByID,
  addPost,
  removePost,
  changePost,
  usersByPostID
}

const commentService = require('../services/comment')

const getComment = (req, res) => {
  commentService.getComment(req, res);
}

const addComment = (req, res) => {
  commentService.addComment(req, res);
}

const removeComment = (req, res) => {
  commentService.deleteComment(req, res);
}

const changeComment = (req, res) => {
  commentService.updateComment(req, res); 
}

module.exports = {
  getComment,
  addComment,
  removeComment,
  changeComment
}

const blog = require('.././services/blog')

const addBlog = (req, res) => {
  blog.addBlog(req,res)
}

const blogPostConfirmation = (req, res) => {
  blog.blogPostConfirmation(req,res)
}

const viewBlogs = (req, res) => {
  blog.viewBlogs(req, res)
}

const blogData = (req, res) => {
  blog.blogData(req, res)
}

module.exports = {
  addBlog,
  blogPostConfirmation,
  viewBlogs,
  blogData
}

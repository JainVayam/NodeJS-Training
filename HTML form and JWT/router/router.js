const user = require(".././controllers/user")
const blog = require('.././controllers/blog')

module.exports.router = () => {
  router.get('/', user.startPage)
  router.get('/addBlog', blog.addBlog)
  router.post('/viewBlogs',blog.viewBlogs)
  router.post('/blogData', blog.blogData)
  router.post('/blogPostConfirmation', blog.blogPostConfirmation)
  router.post('/signUP', user.signUPPage)
  router.post('/userLogin', user.userLogin)
  router.post('/registrationConfirm', user.registrationConfirm)
}


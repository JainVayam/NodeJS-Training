const userController = require('.././controller/user.js')
const commentController = require('../controller/comment.js')
const postController = require('../controller/post.js')

module.exports.routers = () => {
  router.get('/app/v1/postsByUserID/:id', userController.postsByUserID)  
  router.put('/app/v1/addUser', userController.addUser);
  router.delete('/app/v1/deleteUser', userController.removeUser)  
  router.post('/app/v1/updateUser', userController.changeUser)     
  
  router.get('/app/v1/getComment/:id', commentController.getComment)  
  router.put('/app/v1/addComment', commentController.addComment);
  router.delete('/app/v1/deleteComment', commentController.removeComment) 
  router.post('/app/v1/updateComment', commentController.changeComment)

  
  router.get('/app/v1/postByID/:id', postController.postByID)  
  router.put('/app/v1/addPost', postController.addPost);  
  router.delete('/app/v1/deletePost', postController.removePost)  
  router.post('/app/v1/updatePost', postController.changePost)  
  router.get('/app/v1/usersByPostID/:id', postController.usersByPostID)
} 

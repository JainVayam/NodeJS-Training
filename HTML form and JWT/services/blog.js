const User = require(".././model/user.js")
const cfg = require(".././config.js")
const jwt = require('jsonwebtoken')
const Blog = require(".././model/blog.js")
 __dirname ='/home/rails/Training/NodeJS-Training/HTML form and JWT/'

 const addBlog = (req, res) => { 
  res.sendFile(__dirname + 'frontendHTML/addBlog.html')
}

const blogPostConfirmation = (req, res) => {
  var id;
  if(req.body) { 
    jwt.verify(req.body.token, cfg.jwtSecret,((err, decode) => {
      if (err) res.sendStatus(400)
      else id = decode
    }))
    const newContent = new Blog({
      blogContent: req.body.blogContent,
      date: "07/02/2018",
      postedBy: id.id
    })
    newContent.save((err) => {
      if(err) res.sendStatus(400)
      else {
        res.sendFile(__dirname + 'frontendHTML/blogPostConfirmation.html')
      }
    })
  } else {
    res.sendStatus(401)
  } 
}

const viewBlogs = (req, res) => {
  res.sendFile(__dirname + 'frontendHTML/viewBlog.html')
}

const blogData = (req, res) => {
  var id, userName, blogContent; 
  jwt.verify(req.body.token, cfg.jwtSecret,((err, decode) => {
    if (err) res.sendStatus(400)      
    else id = decode   
  }))    
  Blog.find({postedBy: id.id},((err, blogData) => {
    if(err) { 
      res.sendStatus(400) 
    } else {
      res.send(blogData)
    }  
  }))
}  

module.exports = {
  addBlog,
  blogPostConfirmation,
  viewBlogs,
  blogData
}

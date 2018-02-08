const mongoose = require("mongoose")
const Schema = mongoose.Schema
const blogSchema = new Schema({
  blogContent: {
    type: String,
    require: true,
    unique:true
  },
  date: {
    type : String,
    require: true
  },  
  postedBy: {
    type: String,
    require:true,
    ref: 'User'
  }
})

var Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog

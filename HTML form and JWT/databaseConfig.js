const mongoose = require('mongoose')

module.exports = () => {
  const dbConnection = mongoose.connect('mongodb://localhost/firstBlog')
  mongoose.connection.on('open', (res) => {
    console.log("Connection is open to firstBlog");
  });  
  mongoose.connection.on('error', (err) => {
    console.log('Couldn\'t connect to mongo server')
  });
}

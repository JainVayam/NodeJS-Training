const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
Salt_Work_Factor = 10

const Schema = mongoose.Schema
const userSchema = new Schema({
  firstName: {
    type : String,
    require : true,    
  },
  lastName: {
    type : String,
    require : true
  },
  email: { 
    type : String,
    require : true
   }, 
  username: { 
    type : String,
    require : true,
    unique : true
  },
  password: {
    type : String,
    require : true
  }
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();
  bcrypt.genSalt(Salt_Work_Factor, ((err,salt) => {
    if(err) return next(err);
    bcrypt.hash(this.password, salt, ((err, hash) => {
      if(err) return next(err)
      this.password = hash
      next()
    }))  
  }))
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
  if (err) return cb(err);
  cb(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema)
module.exports = User;

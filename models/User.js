const { default: mongoose } = require("mongoose")
const {Schema}=mongoose;
const userSchema = new mongoose.Schema({
    name: {
          type: String,
          require: true
      },
      username:{
        type: String,
        reuire: true,
        unique:true
      },
      email: {
          type: String,
          require: true,
          unique:true
      },
      password: {
          type:String,
             required:true
      }   ,
      date:{
        type:Date,
        default:Date.now
      }
  })
    const User=mongoose.model("users", userSchema)
    User.createIndexes();
  module.exports= User;
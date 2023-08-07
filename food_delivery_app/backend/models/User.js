// const  = require('mongoose')
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    location:{
        type : String,
        required : true
    },
    email:{
         type : String,
         required : true 
    },
    password:{
        type : String,
        required : true
    }
});
let UserModel=mongoose.model('user',UserSchema)

module.exports  ={UserModel}
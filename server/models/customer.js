const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const customerSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{

        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   updatedAt:{
        type:Date,
        default:Date.now
   },
   createdAt:{
        type:Date,
        default:Date.now
   },
   details:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Customer',customerSchema);
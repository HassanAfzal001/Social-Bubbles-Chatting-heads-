const mongoose = require ('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    pic:{
        type:String
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},{collection:"persons"});

module.exports = mongoose.model('persons', personSchema);
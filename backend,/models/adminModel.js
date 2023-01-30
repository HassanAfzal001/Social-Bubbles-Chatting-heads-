const mongoose = require ('mongoose');

const adminSchema = new mongoose.Schema({
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
    pic:{
        type:String,
    }
},{collection:'admins'});

module.exports = mongoose.model('admins', adminSchema);
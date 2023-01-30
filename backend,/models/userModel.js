const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        kind:{
            type:String,
            enum:['admin','person']
        },
        item:{
            type:mongoose.Types.ObjectId,
            refPath: 'userType.kind'
        }
    }
},{collection:'users'});

module.exports = mongoose.model('users', userSchema);
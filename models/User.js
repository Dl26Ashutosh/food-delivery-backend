const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({
        name:'string',
        email:{type:'string', unique: true}, 
        password: 'string',
        phoneNumber: 'string',
        gender: {type:'string', enum:['Male', 'Female', 'Other']}
    }
)

const model = mongoose.model('User', UserSchema);

module.exports= model;

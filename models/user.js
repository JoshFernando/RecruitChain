const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: String,
    displayname: String,
    seed: String,
    applicant: Boolean,
});

const UserModel = model('User', UserSchema);
module.exports = UserModel;
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //blog post content skeleton
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
});
//8:06
module.exports = mongoose.model('User', UserSchema);
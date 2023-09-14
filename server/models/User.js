const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const PostSchema = new Schema({
    //blog post content skeleton
    title: {
        type: String,
        required: true
    },
    
});
//8:06
module.exports = mongoose.model('Post', PostSchema);
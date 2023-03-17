const mongoose = require('mongoose');

const BlogpostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    context: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref:'user'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('blogpost', BlogpostSchema);
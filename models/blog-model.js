const mongoose = require('mongoose');

const BlogpostSchema = mongoose.Schema({
    title: String,
    context: String,
    author: String,
    date: Date
});

module.exports = mongoose.model('blogpost', BlogpostSchema);
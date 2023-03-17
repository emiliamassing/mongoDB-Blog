const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    posts: {
        type: [mongoose.Types.ObjectId],
        ref:'post'
    }
});

module.exports = mongoose.model('user', UserSchema);
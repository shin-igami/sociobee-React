const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: mongoose.Schema.Types.String,
        ref: 'User'
    },
    image:
    {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    id: String,
    title: String,
    content: String,
    author: String,
    comments: [
        {
            id: String,
            content: String,
        }
    ],
    tags: Array,
    likes: Array,
    dislikes: Array
}, {
    versionKey: false,
    timestamps: true
});

const withIndex = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    comments: [
        {
            id: { type: String, required: true },
            content: { type: String, required: true },
        }
    ],
    tags: { type: Array, required: true },
    likes: { type: Array, required: true },
    dislikes: { type: Array, required: true }
}, {
    versionKey: false,
    timestamps: true
});

withIndex.index({
    id: 1,
    title: 1,
    content: 1,
}, {
    name: 'withIndex'
});

module.exports = {
    Posts: model('posts', postSchema),
    PostsWithIndex: model('postsWithIndex', withIndex)
};
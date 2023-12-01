const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    autor: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: { type: Schema.Types.Array, ref: 'Comment' },
    imgURL: { type: String },
    createdAt: { type: Date, default: Date.now }
})

const postModel = model('Post', postSchema)

module.exports = postModel 
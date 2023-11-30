const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true }
})

const commentModel = model('Comment ', postSchema)

module.exports = commentModel 
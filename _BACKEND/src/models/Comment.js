const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    autor: { type: Schema.Types.ObjectId, ref: 'User' },
    email: { type: Schema.Types.String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const commentModel = model('Comment ', commentSchema)

module.exports = commentModel 
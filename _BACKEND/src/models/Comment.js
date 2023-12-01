const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    autor: { type: Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true }
})

const commentModel = model('Comment ', commentSchema)

module.exports = commentModel 
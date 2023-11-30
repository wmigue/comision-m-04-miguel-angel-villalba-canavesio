


const PostModel = require('./../models/Post.js')

const PostController = {}


PostController.index = async (req, res) => {
    const token = req.headers.authorization
    res.json({ data: token })
}





module.exports = PostController


const jwt = require("jsonwebtoken")
const CommentModel = require('./../models/Comment.js')
const postModel = require("../models/Post.js")
const commentModel = require("./../models/Comment.js")


const CommentController = {}


CommentController.create = async (req, res) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(403).json({ error: "usuario no autenticado / error de credenciales." })
        } else {
            const tokenSinBearer = token.split(" ")[1]
            const { description, _id_post } = req.body
            decoded = await jwt.verify(tokenSinBearer, 'aleatorio')
            const { email, _id } = decoded
            const nuevoComentario = await CommentModel.create({ description: description, autor: _id, email: email })
            const postEnQuestion = await postModel.findById(_id_post)
            postEnQuestion.comments.push(nuevoComentario)
            await postEnQuestion.save()
            return res.json({ mensaje: 'comment creado con exito.' })
        }
    } catch (e) {
        return res.status(500).json({ error: "error interno del server: " + e })
    }
}


CommentController.getAll = async (req, res) => {
    try {
        // con sort ordeno los post de mas recientes a mas antiguos
        const comments = await CommentModel.find({}).sort({ createdAt: -1 })
        return res.json({ data: comments })
    } catch (e) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: e
        })
    }
}














// //todos los posts
// CommentModel.index = async (req, res) => {

// }


// CommentModel.getAll = async (req, res) => {
//     try {
//         // con sort ordeno los post de mas recientes a mas antiguos
//         const posts = await postModel.find({}).sort({ createdAt: -1 }).populate('autor')
//         return res.json({ data: posts })
//     } catch (e) {
//         return res.status(500).json({
//             mensaje: 'Ocurrió un error interno',
//             error: e
//         })
//     }
// }




module.exports = CommentController
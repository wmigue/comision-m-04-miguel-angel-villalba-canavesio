


const commentModel = require('../models/Comment.js')
const postModel = require('./../models/Post.js')


const PostController = {}

//todos los posts
PostController.index = async (req, res) => {

}


PostController.getAll = async (req, res) => {
    try {
        // con sort ordeno los post de mas recientes a mas antiguos
        const posts = await postModel.find({}).sort({ createdAt: -1 })
            .populate('autor')
        // console.log(posts)
        return res.json({ data: posts })
    } catch (e) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: e
        })
    }
}



PostController.create = async (req, res) => {
    const { title, description, imgURL } = req.body
    autor = req.user_buscado._id
    try {
        await postModel.create({ title: title, description: description, autor: autor, imgURL: imgURL })
        return res.json({ mensaje: 'post creado con exito.' })
    } catch (e) {
        return res.status(500).json({ mensaje: "error interno del server: " + e })
    }
}



PostController.deletear = async (req, res) => {
    const { id } = req.body
    try {
        const postExiste = await postModel.findOne({ _id: id, autor: req.user_buscado })
        if (!postExiste) {
            return res.status(404).json({ error: "no podes eliminar un post que creo otra persona." })
        } else {
            await postModel.deleteOne({ _id: id, autor: req.user_buscado })
            return res.json({ mensaje: 'eliminado  con exito.' })
        }

    } catch (e) {
        return res.status(500).json({ error: "error interno del server: " + e })
    }
}





module.exports = PostController
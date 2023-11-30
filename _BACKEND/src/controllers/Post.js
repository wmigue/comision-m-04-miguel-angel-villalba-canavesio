


const postModel = require('./../models/Post.js')


const PostController = {}

//todos los posts
PostController.index = async (req, res) => {

}


PostController.getAll = async (req, res) => {
    try {
        const posts = await postModel.find({}).populate('autor')
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





module.exports = PostController
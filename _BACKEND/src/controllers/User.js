const { signToken } = require('../utils/JWT.js')

const userModel = require('./../models/User.js')


const UserController = {}


UserController.getAll = async (req, res) => {
    try {
        const usuarios = await userModel.find({})
        return res.json({ usuarios })
    } catch (e) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: e
        })
    }
}


UserController.getOne = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        if (!user) return res.status(401).json({ mensaje: "usuario no existe." })
        return res.status(200).json({ mensaje: "ok", data: user })
    } catch (e) {
        return res.status(500).json({ mensaje: "error interno del server: " + e })
    }
}


UserController.create = async (req, res) => {
    const { username, password, email, avatarURL } = req.body
    try {
        const user = await userModel.create({ username, password, email, avatarURL })
        return res.json({ mensaje: 'usuario creado con exito.', data: user })
    } catch (e) {
        return res.status(500).json({ mensaje: "error interno del server: " + e })
    }
}




UserController.login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await userModel.findOne({ email: email, password: password })
        console.log(user)
        if (!user) {
            return res.status(401).json({ mensaje: 'usuario no existe. registrarse.' })
        } else {
            const token = signToken(user._id, user.email)
            return res.json({ token: token })
        }
    } catch (err) {
        return res.status(500).json({ mensaje: "error: " + err })
    }

}












UserController.edit = async (req, res) => {
    return res.json({ mensaje: 'Ruta: editar usuario' })
}


UserController.del = async (req, res) => {
    return res.json({ mensaje: 'Ruta: eliminar usuario' })
}







module.exports = UserController
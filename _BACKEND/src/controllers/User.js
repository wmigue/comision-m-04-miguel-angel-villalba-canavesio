
const path = require('path')

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
    const { password, email } = req.body
    // console.log(req.body)
    // console.log(req.files)
    const archivo = req.files.avatarURL
    try {
        let avatar
        const username = email
        let user = await userModel.findOne({ email: email })
        if (user) {
            res.status(409).json({ mensaje: "ese email ya existe. elegir otro" })
        } else {
            avatar = archivo.name
            // console.log(avatar)

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.')
            }

            const ruta = path.join(__dirname, '../../public/uploads', archivo.name)
            console.log(ruta)
            archivo.mv(ruta, function (err) {
                if (err) {
                    return res.status(500).send(err)
                }

            })

            user = await userModel.create({ username: username, password: password, email: email, avatarURL: avatar })
            return res.json({ mensaje: 'usuario creado con exito.', data: user })
        }



    } catch (e) {
        return res.status(500).json({ mensaje: "error interno del server: " + e })
    }
}




UserController.login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await userModel.findOne({ email: email, password: password })
        // console.log (user)
        if (!user) {
            return res.status(401).json({ mensaje: 'usuario no existe. registrarse.' })
        } else {
            const token = signToken(user._id, user.email)
            console.log(user.avatarURL)
            return res.json({ token: token, avatar: user.avatarURL, email: user.email })
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
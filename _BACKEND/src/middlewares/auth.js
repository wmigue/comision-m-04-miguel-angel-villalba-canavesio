const jwt = require('jsonwebtoken')
const PostModel = require('../models/Post')
const UserModel = require('../models/User')

const isAuthenticated = async (req, res, next) => {
    try {
        console.log("isAuthenticated middleware ejecutandose!!!")
        const token = req.headers.authorization
        if (!token) {
            return res.status(403).json({ error: "usuario no autenticado / error de credenciales." })
        }
        const tokenSinBearer = token.split(" ")[1]

        decoded = await jwt.verify(tokenSinBearer, 'aleatorio')
        const { _id } = decoded
        UserModel.findOne({ _id }).exec()
            .then(user => {
                req.user_buscado = user //inyecto el user buscado al request
                next()
            })
    } catch (e) {
        return res.status(500).json({ mensaje: "error interno del server: ", error: e.message })
    }

}





module.exports = isAuthenticated


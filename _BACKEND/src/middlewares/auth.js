const jwt = require('jsonwebtoken')
const PostModel = require('../models/Post')


const isAuthenticated = (req, res, next) => {
    console.log("auth!!!")
    next()
    // const token = req.headers.authorization
    // if (!token) {
    //     return res.status(403).json({ mensaje: "usuario no autenticado / error de credenciales." })
    // }
    // jwt.verify(token, 'aleatorio', (err, decoded) => {
    //     const { _id } = decoded
    //     Users.findOne({ _id }).exec()
    //         .then(user => {
    //             req.user_buscado = user //inyecto el user buscado al request
    //             next()
    //         })
    // })
}





module.exports = isAuthenticated


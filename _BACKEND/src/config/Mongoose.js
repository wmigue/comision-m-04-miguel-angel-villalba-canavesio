const mongoose = require('mongoose')
const dotenv = require("dotenv").config({ path: "../env" })

URL = process.env.MONGO_URI

const conectarMongo = async () => {
    try {
        console.log('Conectando a MongoDB...')
        await mongoose.connect(URL)
    } catch (error) {
        console.log('Errores: ', error)
    }
}

module.exports = conectarMongo


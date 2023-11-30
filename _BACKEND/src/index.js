require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')

const conectarMongo = require('./config/Mongoose.js')

const userRouter = require('./routes/User.js')
const postRouter = require('./routes/Post.js')
// const commentRouter = require('./routes/Comment.js')
// const authRouter = require('./routes/auth.js')

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(fileUpload())
app.use(cors())
app.use(morgan(':method :url :status '))

// Rutas
app.use('/users', userRouter)
app.use('/posts', postRouter)
// app.use(commentRouter)
// app.use(authRouter)


conectarMongo()
    .then(() => app.listen(process.env.PORT, () => console.log("Servidor corriendo en puerto: " + process.env.PORT)))
    .catch((e) => console.log(e.message))

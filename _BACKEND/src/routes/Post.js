const router = require('express').Router()
const { index } = require('../controllers/Post')
const isAuthenticated = require('../middlewares/auth.js')

router.post('/', isAuthenticated, index)



module.exports = router
const router = require('express').Router()
const { create, getAll } = require('../controllers/Comment.js')
const isAuthenticated = require('../middlewares/auth.js')


router.post('/nuevo', isAuthenticated, create)
router.get('/todos', getAll)


module.exports = router
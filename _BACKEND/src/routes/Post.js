const router = require('express').Router()
const { index, getAll, create, deletear } = require('../controllers/Post')
const isAuthenticated = require('../middlewares/auth.js')

router.post('/', index)
router.get('/todos', getAll)
router.post('/nuevo', isAuthenticated, create)
router.post('/eliminar', isAuthenticated, deletear)



module.exports = router
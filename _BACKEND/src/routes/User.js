const router = require('express').Router()
const { getOne, getAll, create, edit, del, login } = require('../controllers/User')

router.get('/getOne/:id', getOne)
router.get('/getAll', getAll)
router.post('/create', create)
router.put('/edit', edit)
router.delete('/delete', del)
router.post('/login', login)


module.exports = router
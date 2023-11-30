
const jwt = require('jsonwebtoken')

const signToken = (_id, email) => {
    return jwt.sign({ _id, email }, 'aleatorio', {
        expiresIn: 60 * 60, //1hr
    })

}



module.exports = { signToken }
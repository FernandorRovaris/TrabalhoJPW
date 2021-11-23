const express = require('express')
const routes = express.Router()
const usuarios = require('./user')
const post = require('./post')
const comentarios = require('./comment')



routes.use('/user', usuarios)
routes.use('/post/user', post)
routes.use('/comment/post/user', comentarios)


module.exports = routes
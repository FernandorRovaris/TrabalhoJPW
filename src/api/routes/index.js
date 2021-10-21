const express = require('express')
const routes = express.Router()
const usuarios = require('./user')
const post = require('./post')
const comentarios = require('./comment')



routes.use('/user', usuarios)
routes.use('/user/post', post)
routes.use('/user/post/comment', comentarios)


module.exports = routes
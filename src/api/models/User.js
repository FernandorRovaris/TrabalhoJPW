const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    nome: String,
    nacimeto: String,
    sexo: String,
    nacionalidde: String    
})

let User = mongoose.model('user', schema)

module.exports = User
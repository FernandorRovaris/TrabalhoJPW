const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    nome: String,
    nacimento: Date,
    sexo: String,
    nacionalidade: String    
})

let User = mongoose.model('user', schema)

module.exports = User
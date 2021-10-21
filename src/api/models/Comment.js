const mongoose = require('mongoose')

let schema = mongoose.Schema({ 
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },    
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    descricao: String,     
    date: {type: Date, default: Date.now },
})

let Comment = mongoose.model('comment', schema)

module.exports = Comment
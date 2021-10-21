const mongoose = require('mongoose')

let schema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    },
    titulo: String,
    autor: String,
    body: String,     
    date: {type: Date, default: Date.now}    
})

let Post = mongoose.model('post', schema)

module.exports = Post
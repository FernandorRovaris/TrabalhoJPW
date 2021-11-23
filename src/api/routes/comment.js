const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')

router.get('/:id',async (req, res)=>{
    try {  
        let comment = await Comment.findById(req.params.id)
        if(!comment){
            res.status(400).json({erro: 'Comentario não encontrado'})
        }
        res.status(200).json(comment)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.get('/',async (req, res)=>{
    try {  
        let comment = await Comment.find()
        if(!comment){
            res.status(400).json({erro: 'Comentario não encontrado'})
        }
        res.status(200).json(comment)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.post('/',async (req, res)=>{
    try {   
        let comment = new Comment(req.body);
        await comment.save()
        res.status(200).json(comment)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.put('/:id', async(req, res)=>{
    try {
        let id = req.params.id    
        let comment = await Comment.findByIdAndUpdate(id, req.body) 
        if(!comment){
            res.status(400).json({erro: 'Comentario não encontrado'})
        }
        res.status(200).json(comment)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        let id = req.params.id    
        let comment = await Comment.findByIdAndDelete(id) 
        if(!comment){
            res.status(400).json({erro: 'Comentario não encontrado'})
        }
        res.status(200).json(comment)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.delete('/', async(req, res)=>{  
    try {
        let comment = await Comment.deleteMany() 
        if(!comment){
            res.status(400).json({erro: 'Comentario não encontrado'})
        }
        res.status(200).json(comment)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

module.exports = router


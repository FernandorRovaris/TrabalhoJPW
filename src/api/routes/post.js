const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/:id',async (req, res)=>{
    try {  
        let post = await Post.findById(req.params.id)
        if(!post){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(post)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.get('/',async (req, res)=>{
    try {  
        let post = await Post.find()
        if(!post){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(post)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.post('/',async (req, res)=>{
    try {   
        let post = new Post(req.body);
        await post.save()
        res.status(200).json(post)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.put('/:id', async(req, res)=>{
    try {
        let id = req.params.id    
        let post = await Post.findByIdAndUpdate(id, req.body) 
        if(!post){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(post)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        let id = req.params.id    
        let post = await Post.findByIdAndDelete(id) 
        if(!post){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(post)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.delete('/', async(req, res)=>{  
    try {
        let post = await Post.deleteMany() 
        if(!post){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(post)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

module.exports = router


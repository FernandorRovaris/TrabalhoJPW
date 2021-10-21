const express = require('express')
const router = express.Router()
const User = require('../models/Post')

router.get('/:user',async (req, res)=>{
    try {  
        let user = await User.find({user: req.params.user})
        if(!user){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(user)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.get('/',async (req, res)=>{
    try {  
        let user = await User.find()
        if(!user){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(user)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.post('/',async (req, res)=>{
    try {   
        let user = new User(req.body);
        await user.save()
        res.status(200).json(user)  
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.get('/:user/:id', async(req, res)=>{
    let id = req.params.id
    try {     
        let user = await User.findById(id).where({user: req.params.user}) 
        if(!user){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(user)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.put('/:id', async(req, res)=>{
    try {
        let id = req.params.id    
        let user = await User.findByIdAndUpdate(id, req.body) 
        if(!user){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(user)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        let id = req.params.id    
        let user = await User.findByIdAndDelete(id) 
        if(!user){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(user)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

router.delete('/', async(req, res)=>{  
    try {
        let user = await User.deleteMany() 
        if(!user){
            res.status(400).json({erro: 'Postagem não encontrado'})
        }
        res.status(200).json(user)   
    } catch {
        res.status(500).json({erro: 'Erro não esperado'})
    }
})

module.exports = router


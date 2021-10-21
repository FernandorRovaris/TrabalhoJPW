const express = require('express')
const app = express()
const routes = require('./api/routes')
const cors =  require('cors')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const url = 'mongodb+srv://jpw:sR6rbSAubXEnck8L@cluster0.zwtnz.mongodb.net/unesc?retryWrites=true&w=majority'

app.use(express.json())
app.use(cors())
app.use('/api', routes)

mongoose.connect(url).then(()=>{
    app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}....`) )    
})


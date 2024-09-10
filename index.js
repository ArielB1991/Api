const express = require('express')
const cors = require ('cors')
const db = require('./models/index')
const router = require('./router/index.routes')
const app = express()

app.get('/', (req, res) =>{
    res.send('Bienvenido')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', router)

db.sequelize
.sync({alter:true})
.then(()=>{
    console.log('Base de datos sincronizada')
})
.catch((err)=> {
    console.log('Error al sincronizar base de datos')
    console.log(err)
})

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})
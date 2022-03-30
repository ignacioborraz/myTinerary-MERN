require('dotenv').config() //carga el contenido de env en process
const cors = require('cors')//middleware gestiona los datos //se instala cors
const express = require('express') //carga el contenido de express

require('./config/database') //requerimos la base de datos
const Router = require('./routes/routes') //requerimos la ruta

const app = express() //app es una constante que usa los metodos de express

const path = require('path')
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'

app.use(cors()) //gesionamos los datos
app.use(express.json()) //devuelve la respuesta en formato json
app.use('/api', Router) //usamos la ruta desde el servidor para ingresar a la base del dato

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
    app.get("*", (req,res)=> {
        req.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(PORT,HOST, ()=>console.log('SERVER READY ON PORT '+PORT)) //listen es un metodo que escucha una variable y ejecuta una funcion
//para recargar el servidor automaticamente instalamos nodemon

//una vez configurado el servidor y la conexion a la base de datos, generamos el modelo de conexion
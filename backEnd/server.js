require('dotenv').config() //carga el contenido de env en process
const cors = require('cors')//middleware gestiona los datos //se instala cors
const express = require('express') //carga el contenido de express

require('./config/database') //requerimos la base de datos
const Router = require('./routes/routes') //requerimos la ruta
const PORT = 4000 //definimos un puerto diferente al de react para que trabaje react

const app = express() //app es una constante que usa los metodos de express

app.use(cors()) //gesionamos los datos
app.use(express.json()) //devuelve la respuesta en formato json
app.use('/api', Router) //usamos la ruta desde el servidor para ingresar a la base del dato

app.listen(PORT, ()=>console.log('SERVER READY EN PORT '+PORT)) //listen es un metodo que escucha una variable y ejecuta una funcion
//para recargar el servidor automaticamente instalamos nodemon

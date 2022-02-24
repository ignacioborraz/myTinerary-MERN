const express = require('express') // require es un metodo que busca un modulo (en este caso busca express)
const PORT = 4000 //definimos un puerto diferente al de react para que trabaje react

require('dotenv').config() //carga el contenido de env en process
require('./config/database') //requerimos la base de datos

const app = express() //app es una constante que usa los metodos de express

app.listen(PORT, ()=>console.log('Server Ready on PORT '+PORT)) //listen es un metodo que escucha una variable y ejecuta una funcion

//para recargar el servidor automaticamente instalamos nodemon

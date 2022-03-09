//se configuran la conexion a la base de datos

const mongoose = require('mongoose') //importamos el paquete mongoose que nos da conexion con el servidor de nuestra base de datos

mongoose.connect(process.env.MONGO_URI,{ //me conecto a mongo_uri que es el link de nuestra base de datos en atlas
    //nos conectamos a mongoose con dos opciones de conexion
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then( ()=>console.log('DATABASE CONNECTED')) //si se conecta
.catch( err => console.error(err)) //si no se puede conectar

//ahora la llamamos en el servidor
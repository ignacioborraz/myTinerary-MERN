const mongoose = require('mongoose') //llamo al paquete

mongoose.connect(process.env.MONGO_URI,{
    //nos conectamos a mongoose con dos opciones de conexion
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then( ()=>console.log('DATABASE CONNECTED')) //si se conecta
.catch( err => console.error(err))

//ahora la llamamos en el servidor
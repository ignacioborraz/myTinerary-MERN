//se configura la conexion a la base de datos

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then( ()=>console.log('DATABASE CONNECTED'))
.catch( err => console.error(err))
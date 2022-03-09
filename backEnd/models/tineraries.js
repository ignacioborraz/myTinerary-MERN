const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const tinerariesSchema = new mongoose.Schema ({ //construimos el modelo de tabla
    city: {type:String, required:true},
    userPhoto: {type:String, required:true},
    userName: {type:String, required:true},
    name: {type:String, required:true},
    price: {type:String, required:true},
    time: {type:String, required:true},
    tags: {type:String, required:true},
    description: {type:String, required:true},
    comments: {type:String, required:true}
})

const Tineraries = mongoose.model('tineraries',tinerariesSchema) //defino el constructor del modelo con el nombre de coleccion y el nombre de la tabla del modelo
module.exports = Tineraries //exportamos el modelo

//ahora establecemos el controlador del modelo
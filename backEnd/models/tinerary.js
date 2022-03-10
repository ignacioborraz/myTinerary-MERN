const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const tinerariesSchema = new mongoose.Schema ({ //construimos el modelo de tabla
    city: {type: mongoose.Types.ObjectId , ref:'cities'}, //relaciono la colección con un elemento de otra coleccion
    userPhoto: {type:String, required:true},
    userName: {type:String, required:true},
    itinerary: {type:String, required:true},
    price: {type:String, required:true},
    time: {type:String, required:true},
    tags: {type:Array, required:true},
    description: {type:String, required:true},
    comments: {type:Array, required:true}
})

const Tineraries = mongoose.model('tineraries',tinerariesSchema) //defino el constructor del modelo con el nombre de coleccion y el nombre de la tabla del modelo
module.exports = Tineraries //exportamos el modelo

//ahora establecemos el controlador del modelo
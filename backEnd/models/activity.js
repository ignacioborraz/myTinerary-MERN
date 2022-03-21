const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const activitiesSchema = new mongoose.Schema ({ //construimos el modelo de tabla
    itinerary: {type: mongoose.Types.ObjectId , ref:'tineraries'}, //relaciono la colección con un elemento de otra coleccion
    activity: {type:String, required:true},
    actPhoto: {type:String, required:true}    
})

const Activities = mongoose.model('activities',activitiesSchema) //defino el constructor del modelo con el nombre de coleccion y el nombre de la tabla del modelo
module.exports = Activities //exportamos el modelo

//ahora establecemos el controlador del modelo
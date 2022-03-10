const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const citiesSchema = new mongoose.Schema ({ //construimos el modelo de tabla
    continent: {type:String, required:true},
    country: {type:String, required:true},
    city: {type:String, required:true},
    photo: {type:String, required:true},
    population: {type:Number, required:true}
})

const Cities = mongoose.model('cities',citiesSchema) //defino el constructor del modelo con el nombre de coleccion y el nombre de la tabla del modelo
module.exports = Cities //exportamos el modelo

//ahora establecemos el controlador del modelo
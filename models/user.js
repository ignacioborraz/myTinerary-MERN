const mongoose = require('mongoose') //llamamos al constructor que crea un modelo de pedido de datos

const usersSchema = new mongoose.Schema ({ //construimos el modelo de tabla
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:Array, required:true},
    userPhoto: {type:String, required:true},
    country: {type:String, required:true},
    from: {type:Array},
    uniqueString: {type:String, required:true},
    verification: {type:Boolean, required:true}
})

const Users = mongoose.model('users',usersSchema) //defino el constructor del modelo con el nombre de coleccion y el nombre de la tabla del modelo
module.exports = Users //exportamos el modelo

//ahora establecemos el controlador del modelo
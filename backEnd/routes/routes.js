const Router = require('express').Router()

const citiesController = require('../controllers/citiesControllers') //importamos los controladores que configuramos
const {getCities,uploadCity,deleteCity,modifyCity} = citiesController //desestructuramos el objeto para obtener los controladores

Router.route('/cities') //llamo a ciudades (el nombre del endpoint de la consulta axios)
.get(getCities) //llamo al metodo get para obtener las ciudades
.post(uploadCity) //llamo al metodo post para agregar las ciudades

Router.route('/cities/:id') //llamo a ciudades de id especifico
.delete(deleteCity) //llamo al metodo delete para eliminar la ciudad
.put(modifyCity) //llamo al metodo put para modificar la ciudad

module.exports = Router //esporto el modulo

//configuro el endpoint en el server
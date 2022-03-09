const Router = require('express').Router()

const citiesControllers = require('../controllers/citiesControllers') //importamos los controladores que configuramos
const {getCities,uploadCity,deleteCity,modifyCity,findCity} = citiesControllers //desestructuramos el objeto para obtener los controladores

Router.route('/cities') //llamo a ciudades (el nombre del endpoint de la consulta axios)
.get(getCities) //llamo al metodo get para obtener las ciudades
.post(uploadCity) //llamo al metodo post para agregar las ciudades

Router.route('/cities/:id') //llamo a ciudades de id especifico
.delete(deleteCity) //llamo al metodo delete para eliminar la ciudad
.put(modifyCity) //llamo al metodo put para modificar la ciudad
.get(findCity) //llamo al metodo para traer un solo id


const tinerariesController = require('../controllers/tinerariesControllers') //importamos los controladores que configuramos
const {getTineraries} = tinerariesController //desestructuramos el objeto para obtener los controladores

Router.route('/tineraries') //llamo a ciudades (el nombre del endpoint de la consulta axios)
.get(getTineraries) //llamo al metodo get para obtener laos itinerarios

module.exports = Router //esporto el modulo

//configuro el endpoint en el server
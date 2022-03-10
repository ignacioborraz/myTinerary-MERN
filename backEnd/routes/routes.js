const Router = require('express').Router()

const cityControllers = require('../controllers/cityControllers') //importamos los controladores que configuramos
const {getCities,uploadCity,deleteCity,modifyCity,oneCity} = cityControllers //desestructuramos el objeto para obtener los controladores
const tineraryController = require('../controllers/tineraryControllers')
const {getTineraries,uploadTinerary,deleteTin,modifyTin,oneTinerary,findTinFromCity} = tineraryController

Router.route('/cities') //llamo a ciudades (el nombre del endpoint de la consulta axios)
.get(getCities) //llamo al metodo get para obtener las ciudades
.post(uploadCity) //llamo al metodo post para agregar las ciudades

Router.route('/cities/:id') //llamo a ciudades de id especifico
.delete(deleteCity) //llamo al metodo delete para eliminar la ciudad
.put(modifyCity) //llamo al metodo put para modificar la ciudad
.get(oneCity) //llamo al metodo para traer un solo id

Router.route('/tineraries')
.get(getTineraries)
.post(uploadTinerary)

Router.route('/tineraries/:id')
.delete(deleteTin)
.put(modifyTin)
.get(oneTinerary)

Router.route('/tineraries/cities/:id')
.get(findTinFromCity)

module.exports = Router //esporto el modulo

//configuro el endpoint en el server
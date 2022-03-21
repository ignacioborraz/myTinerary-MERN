const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const cityController = require('../controllers/cityControllers') //importamos los controladores que configuramos
const {getCities,uploadCity,deleteCity,modifyCity,oneCity} = cityController //desestructuramos el objeto para obtener los controladores
const tineraryController = require('../controllers/tineraryControllers')
const {getTineraries,uploadTinerary,deleteTin,modifyTin,oneTinerary,findTinFromCity} = tineraryController
const activityController = require('../controllers/activityControllers')
const {getActivities,uploadActivity,deleteAct,modifyAct,oneActivity,findActFromTin} = activityController
const userController = require('../controllers/userControllers')
const {signUpUser,logInUser,signOutUser,verifyToken,verifyEmail} = userController

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

Router.route('/activities')
.get(getActivities)
.post(uploadActivity)

Router.route('/activities/:id')
.delete(deleteAct)
.put(modifyAct)
.get(oneActivity)

Router.route('/activities/tineraries/:id')
.get(findActFromTin)

Router.route('/auth/signUp')
.post(validator,signUpUser)

Router.route('/auth/logIn')
.post(logInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/auth/loginToken')
.get(passport.authenticate('jwt', {session:false}), verifyToken)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

module.exports = Router //esporto el modulo

//configuro el endpoint en el server
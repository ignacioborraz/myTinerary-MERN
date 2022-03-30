const Activities = require('../models/activity')

const activityController = { //defino los metodos que necesita el controlador (utiliza una funcion asincrona (async/await))

    getActivities: async (req,res) => { //request,response
        let activities //defino el nombre de la coleccion
        let error = null //predefino el error
        try { //intento traer los datos
            activities = await Activities.find() //espera la respuesta del modelo
        } catch (err) {//en caso de que no consiga encontrar el modelo, agarro el error
            error = err
            console.log(error)
        } //en caso de que lo encuentre, la respuesta devuelve un JSON
        res.json({ //transformo la respuesta en un json y:
            response: error ? 'ERROR' : {activities}, //si la respuesta tiene error "se llena el console.log con ERROR", sino se cargan la coleccion
            success: error ? false:true, //si la respuesta es exitosa, el "estado" de esta propiedad es true
            error: error //si la respues es un error, se devuelve el error
        })
    },

    uploadActivity: async (req,res) => {
        const {itinerary,activity,actPhoto} = req.body
        new Activities ({itinerary,activity,actPhoto}).save()
        .then(response => res.json({response}))
    },

    deleteAct: async (req,res) => {
        const id = req.params.id
        await Activities.findOneAndDelete({_id:id})
    },

    modifyAct: async (req,res) => {
        const id = req.params.id
        const acts = req.body
        //agregar try/catch con response (tener cuidado con que no se borren las propiedades que no se setean)
        await Activities.findOneAndUpdate({_id:id},acts)
    },

    oneActivity: async (req,res) => { 
        let activityId = req.params.id 
        let activity 
        let error = null 
        try { 
            activity = await Activities.findOne({_id:activityId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activity}, 
            success: error ? false:true, 
            error: error 
        })
    },

    findActFromTin: async (req,res) => { 
        let itineraryId = req.params.id
        //console.log(itineraryId)
        let activities 
        let error = null 
        try { 
            activities = await Activities.find({itinerary:itineraryId}) 
            //console.log(activities)
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    }

}

module.exports = activityController //exporto los controladores

//luego configuro el enrrutador de endpoints
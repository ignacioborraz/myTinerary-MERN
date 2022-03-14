const Tineraries = require('../models/tinerary')

const tineraryController = { //defino los metodos que necesita el controlador (utiliza una funcion asincrona (async/await))

    getTineraries: async (req,res) => { //request,response
        let tineraries //defino el nombre de la coleccion
        let error = null //predefino el error
        try { //intento traer los datos
            tineraries = await Tineraries.find() //espera la respuesta del modelo
        } catch (err) {//en caso de que no consiga encontrar el modelo, agarro el error
            error = err
            console.log(error)
        } //en caso de que lo encuentre, la respuesta devuelve un JSON
        res.json({ //transformo la respuesta en un json y:
            response: error ? 'ERROR' : {tineraries}, //si la respuesta tiene error "se llena el console.log con ERROR", sino se cargan la coleccion
            success: error ? false:true, //si la respuesta es exitosa, el "estado" de esta propiedad es true
            error: error //si la respues es un error, se devuelve el error
        })
    },

    uploadTinerary: async (req,res) => {
        const {city,userPhoto,userName,itinerary,price,time,tags,description,comments} = req.body
        new Tineraries ({city,userPhoto,userName,itinerary,price,time,tags,description,comments}).save()
        .then(respons => res.json({respons}))
    },

    deleteTin: async (req,res) => {
        const id = req.params.id
        await Tineraries.findOneAndDelete({_id:id}) //espero que encuentre y borre el objeto de la coleccion
    },

    modifyTin: async (req,res) => {
        const id = req.params.id
        const tinerary = req.body
        //agregar try/catch con response (tener cuidado con que no se borren las propiedades que no se setean)
        await Tineraries.findOneAndUpdate({_id:id},tinerary)
    },

    oneTinerary: async (req,res) => { 
        let tineraryId = req.params.id 
        let tinerary 
        let error = null 
        try { 
            tinerary = await Tineraries.findOne({_id:tineraryId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tinerary}, 
            success: error ? false:true, 
            error: error 
        })
    },

    findTinFromCity: async (req,res) => { 
        let cityId = req.params.id
        let tineraries 
        let error = null 
        try { 
            tineraries = await Tineraries.find({city:cityId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tineraries}, 
            success: error ? false:true, 
            error: error 
        })
    }
}

module.exports = tineraryController //exporto los controladores

//luego configuro el enrrutador de endpoints
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
        const {city,userPhoto,userName,itinerary,price,time,tags,description,likes,comments} = req.body
        new Tineraries ({city,userPhoto,userName,itinerary,price,time,tags,description,likes,comments}).save()
        .then(respons => res.json({respons}))
    },

    deleteTin: async (req,res) => {
        const id = req.params.id
        await Tineraries.findOneAndDelete({_id:id}) //espero que encuentre y borre el objeto de la coleccion
    },

/*     modifyLike: async (req,res) => {
        const tineraryId = req.params.id
        const {likes} = req.body
        let tinerary
        try { 
            tinerary = await Tineraries.findOne({_id:tineraryId})
            likes = tinerary.likes
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tinerary}, 
            success: error ? false:true, 
            error: error 
        })
        
        //agregar try/catch con response (tener cuidado con que no se borren las propiedades que no se setean)
        await Tineraries.findOneAndUpdate({_id:id},tinerary)
    }, */

    oneTinerary: async (req,res) => { 
        let tineraryId = req.params.id 
        let tinerary 
        let error = null 
        try { 
            tinerary = await Tineraries.findOne({_id:tineraryId})
            .populate("comments.userId", {name:1,email:1,userPhoto:1})
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
        //console.log(cityId)
        let tineraries 
        let error = null 
        try { 
            tineraries = await Tineraries.find({city:cityId}) 
            .populate("comments.userId", {name:1,email:1,userPhoto:1})
            //console.log(tineraries)
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {tineraries}, 
            success: error ? false:true, 
            error: error 
        })
    },

    likeDislike: async (req,res) => {
        console.log(req)
        let tineraryId = req.params.id 
        let user = req.user.id
        //console.log(user)
        try { 
            let tinerary = await Tineraries.findOne({_id:tineraryId}) 
            if (tinerary.likes.includes(user)) {
                Tineraries.findOneAndUpdate({_id:tineraryId}, {$pull:{likes:user}}, {new:true})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            } else {
                Tineraries.findOneAndUpdate({_id:tineraryId}, {$push:{likes:user}}, {new:true})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            }
        } catch (error) {
            res.json({
                response: error,
                success: false
            })
        } 
    }
}

module.exports = tineraryController //exporto los controladores

//luego configuro el enrrutador de endpoints
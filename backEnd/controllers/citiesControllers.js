const Cities = require('../models/cities')

const citiesControllers = { //defino los metodos que necesita el controlador (utiliza una funcion asincrona (async/await))

    getCities: async (req,res) => { //request,response
        let cities //defino la variable que va a contener la base de datos
        let error = null //defino la variable que va a contener el error
        try { //intento traer los datos
            cities = await Cities.find() //espera la respuesta del modelo
        } catch (err) {//en caso de que no consiga encontrar el modelo, agarro el error
            error = err
            console.log(error)
        } //en caso de que lo encuentre, la respuesta devuelve un JSON
        res.json({ //transformo la respuesta en un json y:
            response: error ? 'ERROR' : {cities}, //si la respuesta tiene error "se llena el console.log con ERROR", sino se cargan la coleccion
            success: error ? false:true, //si la respuesta es exitosa, el "estado" de esta propiedad es true
            error: error //si la respues es un error, se devuelve el error
        })
    },
    
    uploadCity: async (req,res) => { //request,response
        //el usuario carga los datos de una nueva ciudad desde un formulario del HTML
        //los datos del formulario están agrupados en un array (dataInputs)
        //en la consola del backend vemos los siguientes consoleos
        //console.log(req) //consoleo para ver donde están los datos que necesito
        //console.log(req.body.dataInputs) //verifico los datos
        const {continent,country,city,photo,population} = req.body.dataInput //defino los parámetros del formulario
        new Cities ({ //llamamos al constructor de ciudades que creamos en el modelo
            continent: continent,
            country: country,
            city: city,
            photo: photo,
            population: population
        }).save() //le ordenamos que los guarde
        .then(respons => res.json({respons})) //luego cargamos la respuesta en un json
    },

    deleteCity: async (req,res) => { //request,response
        //el usuario presiona un boton de HTML del elemento a borrar
        const id = req.params.id //defino el id a borrar
        await Cities.findOneAndDelete({_id:id}) //espero que encuentre y borre el objeto de la coleccion
    },

    modifyCity: async (req,res) => { //request,response
        const id = req.params.id //defino el id a modificar
        const modifyC = req.body.dataInput //defino los parámetros del formulario
        await Cities.findOneAndUpdate({_id:id},modifyC)
        .then(respons => res.json({respons})) //luego cargamos la respuesta en un json
    },

    findCity: async (req,res) => { //request,response
        let cityId = req.params.id //defino el id qe necesito
        let cities //defino la variable que va a contener la base de datos
        let error = null //predefino el error
        try { //intento traer los datos
            cities = await Cities.findOne({_id:cityId}) //espera la respuesta del modelo
        } catch (err) {//en caso de que no consiga encontrar el modelo, agarro el error
            error = err
            console.log(error)
        } //en caso de que lo encuentre, la respuesta devuelve un JSON
        res.json({ //transformo la respuesta en un json y:
            response: error ? 'ERROR' : {cities}, //si la respuesta tiene error "se llena el console.log con ERROR", sino se cargan la coleccion
            success: error ? false:true, //si la respuesta es exitosa, el "estado" de esta propiedad es true
            error: error //si la respues es un error, se devuelve el error
        })
    }
}

module.exports = citiesControllers //exporto los controladores

//luego configuro el enrrutador de endpoints

//para probar los controladores, ese necesario tener el front o desde:
//https://web.postman.co/
//para get/delete solamente es necesaria la URL de la api (y api+id)
//para los otros metodos es necesario ingresar en body un JSON con los parámetros a subir/modificar
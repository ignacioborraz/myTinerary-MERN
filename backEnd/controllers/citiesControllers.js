const Cities = require('../models/cities')

const citiesController = { //defino los metodos que necesita el controlador (utiliza una funcion asincrona (async/await))

    getCities: async (req,res) => { //request,response
        let cities //defino el nombre de la coleccion
        let error = null //predefino el error
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

    //el usuario "común" no deberia poder NI CARGAR, NI BORRAR, NI MODIFICAR UN OBJETO
    //pero para fines prácticos creamos los siguientes métodos también:
    
    uploadCity: async (req,res) => { //request,response
        //el usuario carga los datos de una nueva ciudad desde un formulario del HTML
        //los datos del formulario están agrupados en un array (dataInputs)
        //en la consola del backend vemos los siguientes consoleos
        //console.log(req) //consoleo para ver donde están los datos que necesito
        //console.log(req.body.dataInputs) //verifico los datos
        const {continent,country,city} = req.body.dataInputs //estructuro un nuevo objeto de la coleccion
        new Cities ({ //llamamos al constructor de ciudades que creamos en el modelo
            continent: continent,
            country: country,
            city: city,
        }).save() //le ordenamos que los guarde
        .then(respons => res.json({respons})) //luego cargamos la respuesta en un json
    },

    deleteCity: async (req,res) => { //request,response
        //el usuario presiona un boton de HTML del elemento a borrar
        //los datos del id de ese boton
        //console.log(req) //consoleo para ver donde están los datos que necesito
        //console.log(req.params.id) //verifico los datos
        const id = req.params.id //defino el id a borrar
        await Cities.findOneAndDelete({_id:id}) //espero que encuentre y borre el objeto de la coleccion
    },

    modifyCity: async (req,res) => { //request,response
        //el usuario presiona un boton de HTML del elemento a modificar
        //luego carga los "nuevos" datos de una "vieja"ciudad desde un formulario del HTML
        const id = req.params.id //defino el id a modificar
        const ciudad = req.body.dataInput //estructuro la modificacion del objeto de la coleccion
        await Cities.findOneAndUpdate({_id:id},ci)
    }
}

module.exports = citiesController //exporto los controladores

//luego configuro el enrrutador de endpoints
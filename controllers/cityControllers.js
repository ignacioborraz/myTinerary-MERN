const Cities = require('../models/city')

const cityControllers = { 

    getCities: async (req,res) => { 
        let cities 
        let error = null 
        try { 
            cities = await Cities.find() 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {cities}, 
            success: error ? false:true, 
            error: error 
        })
    },
    
    uploadCity: async (req,res) => { 
        //console.log(req.body.dataInputs)
        const {continent,country,city,photo,population} = req.body.dataInput 
        new Cities ({ 
            continent: continent,
            country: country,
            city: city,
            photo: photo,
            population: population
        }).save() 
        .then(respons => res.json({respons})) 
    },

    deleteCity: async (req,res) => { 
        const id = req.params.id 
        await Cities.findOneAndDelete({_id:id}) 
    },

    modifyCity: async (req,res) => { 
        const id = req.params.id 
        const modifyC = req.body.dataInput 
        await Cities.findOneAndUpdate({_id:id},modifyC)
        .then(respons => res.json({respons})) 
    },

    oneCity: async (req,res) => { 
        let cityId = req.params.id 
        let cities 
        let error = null 
        try { 
            cities = await Cities.findOne({_id:cityId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {cities}, 
            success: error ? false:true, 
            error: error 
        })
    }
}

module.exports = cityControllers 
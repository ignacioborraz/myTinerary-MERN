import axios from 'axios';

const cityActions = { //las acciones son eventos en forma de objetos
    getCities: () => { //retorno una funcion asincrona debido a que las acciones a primera "vista" no pueden ser asincronas
        //getState: para ver el estado, es necesario definir el estado inicial (de lo contrario no funciona)
        //dispatch: despacho/envio de acciones a los estados, depende de:
        //type: es lo que busca el reductor
        //payload: la carga que se realizará
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/cities`)
            dispatch({type:'GET_CITIES', payload:res.data.response.cities})
        }
    },
    uploadCity: (continent,country,city,photo,population)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post('http://localhost:4000/api/cities',{continent,country,city,photo,population})
            dispatch({type:'UPD_CITY', payload:answer.data.response.cities})
        }
    },
    deleteCity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(`http://localhost:4000/api/cities/${id}`)
                dispatch({type:'DEL_CITY', payload:answer.data.response.cities})
            }catch (err) {
                console.log(err)
            }
        }
    },
    /* modifyCity: '', */
    oneCity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(`http://localhost:4000/api/cities/${id}`)
                dispatch({type:'ONE_CITY', payload:answer.data.response.cities})
            }catch (err) {
                console.log(err)
            }
        }
    },
    filterCities: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FIL_CITIES', payload:input})
        }
    }
}

export default cityActions;

//la accion despacha al reductor
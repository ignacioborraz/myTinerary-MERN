import axios from 'axios';

const tineraryActions = { //las acciones son eventos en forma de objetos
    getTineraries: () => { //retorno una funcion asincrona debido a que las acciones a primera "vista" no pueden ser asincronas
        //getState: para ver el estado, es necesario definir el estado inicial (de lo contrario no funciona)
        //dispatch: despacho/envio de acciones a los estados, depende de:
        //type: es lo que busca el reductor
        //payload: la carga que se realizará
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/tineraries`)
            dispatch({type:'GET_TINERARIES', payload:res.data.response.tineraries})
       }
    },
    uploadTinerary: (city,userPhoto,userName,itinerary,price,time,tags,description,comments)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post('http://localhost:4000/api/tineraries',{city,userPhoto,userName,itinerary,price,time,tags,description,comments})
            dispatch({type:'UPD_TINERARY', payload:answer.data.response.tineraries})
        }
    },
    deleteTin: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(`http://localhost:4000/api/tineraries/${id}`)
                dispatch({type:'DEL_TINERARY', payload:answer.data.response.tineraries})
            }catch (err) {
                console.log(err)
            }
        }
    },
    /* modifyTin: '', */
    oneTinerary: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(`http://localhost:4000/api/tineraries/${id}`)
                dispatch({type:'ONE_TINERARY', payload:answer.data.response.tineraries})
            }catch (err) {
                console.log(err)
            }
        }
    },
    findFromCity: (id) => {
        console.log(id);
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(`http://localhost:4000/api/tineraries/cities/${id}`)
                console.log(answer.data);
                dispatch({type:'FIL_TINERARIES', payload:answer.data.response.tineraries})
            }catch (err) {
                console.log(err)
            }
        }
    }
}

export default tineraryActions;

//la accion despacha al reductor
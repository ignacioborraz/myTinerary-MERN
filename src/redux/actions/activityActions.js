import axios from 'axios';

const activityActions = { //las acciones son eventos en forma de objetos
    getActivities: () => { //retorno una funcion asincrona debido a que las acciones a primera "vista" no pueden ser asincronas
        //getState: para ver el estado, es necesario definir el estado inicial (de lo contrario no funciona)
        //dispatch: despacho/envio de acciones a los estados, depende de:
        //type: es lo que busca el reductor
        //payload: la carga que se realizará
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/activities`)
            dispatch({type:'GET_ACTIVITIES', payload:res.data.response.activities})
        }
    },
    uploadActivity: (itinerary,activity,actPhoto)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post('http://localhost:4000/api/activities',{itinerary,activity,actPhoto})
            dispatch({type:'UPD_ACTIVITY', payload:answer.data.response.activities})
        }
    },
    deleteAct: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(`http://localhost:4000/api/activities/${id}`)
                dispatch({type:'DEL_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },
    /* modifyTin: '', */
    oneActivity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(`http://localhost:4000/api/activities/${id}`)
                dispatch({type:'ONE_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },
    findActFromTin: (id) => {
        console.log(id);
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(`http://localhost:4000/api/activities/tineraries/${id}`)
                console.log(answer.data);
                dispatch({type:'FIL_ACTIVITIES', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    }

/*     findActFromTin: (id) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get(`http://localhost:4000/api/activities/tineraries/${id}`)
                return {
                    success: true, response: response.data.response
                }
            }
            catch (error) {
                return {
                    success: false, response: error.messagge
                }
            }
        }

    } */

}

export default activityActions

//la accion despacha al reductor
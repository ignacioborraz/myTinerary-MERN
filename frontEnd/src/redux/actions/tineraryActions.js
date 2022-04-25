import axios from 'axios'

let urlMyTin = 'https://mytinerary-borraz.herokuapp.com/'
//let urlMyTin ='http://localhost:4000/'

const tineraryActions = {
    
    getTineraries: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(urlMyTin+`api/tineraries`)
            dispatch({type:'GET_TINERARIES', payload:res.data.response.tineraries})
        }
    },

    uploadTinerary: (city,userPhoto,userName,itinerary,price,time,tags,description,likes,comments)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post(urlMyTin+'api/tineraries',{city,userPhoto,userName,itinerary,price,time,tags,description,likes,comments})
            dispatch({type:'UPD_TINERARY', payload:answer.data.response.tineraries})
        }
    },

    deleteTin: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(urlMyTin+`api/tineraries/${id}`)
                dispatch({type:'DEL_TINERARY', payload:answer.data.response.tineraries})
            }catch (err) {
                console.log(err)
            }
        }
    },

    oneTinerary: (id) => {
        //console.log(id)
        return async() => {
            try {
                const answer = await axios.get(urlMyTin+`api/tineraries/${id}`)
                return answer.data.response.tinerary
            }catch (err) {
                console.log(err)
            }
        }
    },

    findFromCity: (id) => {
        //console.log(id);
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(urlMyTin+`api/tineraries/cities/${id}`)
                //console.log(answer.data);
                dispatch({type:'FIL_TINERARIES', payload:answer.data.response.tineraries})
            }catch (err) {
                console.log(err)
            }
        }
    },

    likeDislike: (id) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const answer = await axios.put(urlMyTin+`api/tineraries/likeDislike/${id}`,{},
                    {headers: {Authorization: "Bearer "+token}}
                )
                //console.log(answer.data.response)
                return answer.data.response
            }catch (err) {
                console.log(err)
            }
        }
    },

    addComment: (commentaries) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.post(urlMyTin+`api/tineraries/comment`,{...commentaries},
                {headers: {'Authorization': "Bearer "+token}}
            )
            dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
            return answer.data.response
        }
    },

    modifyComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.put(urlMyTin+`api/tineraries/comment`,{...comment},
            {headers: {Authorization: "Bearer "+token}}
        )
        dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
        })
        return answer.data.response
        }
    },

    deleteComment: (id) => {
        const token = localStorage.getItem('token')
            return async (dispatch, getState) => {
                const answer = await axios.post(urlMyTin+`api/tineraries/comment/${id}`,{},
                {headers: {Authorization: "Bearer "+token}}
            )
            dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
            return answer.data.response
        }
    }

}

export default tineraryActions;
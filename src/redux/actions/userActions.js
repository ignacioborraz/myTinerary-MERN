import axios from 'axios';

const userActions = {
    signUpUser: (userData) => {
        console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/signUp', {userData}) //envio a la api los datos del usuario nuevo
            console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success}}) //despacho al reductor
        }
    },
    logInUser: (userLogin) => {
        console.log(userLogin)
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/logIn', {userLogin})
            console.log(res)
            if(res.data.success) { //si tiene exito
                localStorage.setItem('token',res.data.response.token) //en el almacenamiento local guardamos el token para que no se cierre sesion cuando salgamos
                dispatch({type: 'user', payload: res.data.response.userData}) //despacho al reductor los datos
            }
            dispatch({type: 'message', payload: {view: true, message: res.data.message, success: res.data.success}})
        } 
    },
    signOutUser: (closeData) => {
        console.log(closeData)
        return async (dispatch, getState) => {
        const res = axios.post('http://localhost:4000/api/auth/signOut',{closeData}) //envio a la api los datos del usuario que cierra sesion
        console.log(res)
        localStorage.removeItem('token')
        dispatch({type: 'user', payload: null})
        }   
    }
}

export default userActions;
//la accion despacha al reductor